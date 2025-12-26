#!/usr/bin/env node
/**
 * DNS反查测试脚本
 * 
 * 使用方法：
 *   node scripts/test-dns.js [IP地址]
 * 
 * 示例：
 *   node scripts/test-dns.js 213.130.142.55
 *   node scripts/test-dns.js 8.8.8.8
 *   node scripts/test-dns.js 1.1.1.1
 */

const { promisify } = require('node:util')
const dns = require('node:dns')

const reverse = promisify(dns.reverse)

/**
 * 验证IP地址格式
 */
function isValidIp(ip) {
  // IPv4格式验证
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/
  if (ipv4Pattern.test(ip)) {
    const parts = ip.split('.')
    return parts.every(part => {
      const num = parseInt(part, 10)
      return num >= 0 && num <= 255
    })
  }

  // IPv6格式验证（简化版）
  const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::1$|^::$/
  if (ipv6Pattern.test(ip)) {
    return true
  }

  // 压缩格式IPv6（如 ::1）
  if (ip.includes('::')) {
    return true
  }

  return false
}

/**
 * 对IP地址进行DNS反查
 */
async function reverseDnsLookup(ip) {
  const startTime = Date.now()

  // 验证IP地址格式
  if (!isValidIp(ip)) {
    return {
      success: false,
      hostnames: [],
      error: 'Invalid IP address format',
      responseTime: Date.now() - startTime,
    }
  }

  try {
    // 执行DNS反查
    const hostnames = await reverse(ip)
    const responseTime = Date.now() - startTime

    return {
      success: true,
      hostnames: Array.isArray(hostnames) ? hostnames : [hostnames],
      responseTime,
    }
  }
  catch (error) {
    const responseTime = Date.now() - startTime
    const errorMessage = error instanceof Error ? error.message : String(error)

    // DNS反查失败时返回空结果（不拦截，因为可能是DNS服务器问题）
    return {
      success: false,
      hostnames: [],
      error: errorMessage,
      responseTime,
    }
  }
}

/**
 * 检查域名是否匹配正则表达式模式
 */
function matchRegex(hostname, pattern) {
  try {
    const lowerHostname = hostname.toLowerCase()
    // 直接使用正则表达式匹配，不区分大小写
    const regex = new RegExp(pattern, 'i')
    return regex.test(lowerHostname)
  }
  catch (error) {
    // 如果正则表达式无效，记录错误但不拦截（避免配置错误导致所有请求被拦截）
    console.error(`[DNS Blacklist] Invalid regex pattern: ${pattern}`, error)
    return false // 无效的正则表达式不匹配任何内容
  }
}

/**
 * 检查DNS反查结果是否在黑名单中（支持正则表达式）
 */
function checkDnsBlacklist(hostnames, blacklist) {
  // 如果黑名单为空，则放行
  if (blacklist.length === 0)
    return true

  // 如果DNS反查失败（没有域名），则放行（可能是DNS服务器问题）
  if (hostnames.length === 0)
    return true

  // 检查每个域名是否匹配黑名单中的任何正则表达式
  for (const hostname of hostnames) {
    for (const pattern of blacklist) {
      if (matchRegex(hostname, pattern)) {
        return false // 匹配到黑名单，拦截
      }
    }
  }

  return true // 没有匹配到黑名单，放行
}

/**
 * 格式化输出结果
 */
function formatResult(ip, result, allowed, blacklist) {
  console.log('\n' + '='.repeat(60))
  console.log(`IP地址: ${ip}`)
  console.log('-'.repeat(60))
  console.log(`成功: ${result.success ? '✓' : '✗'}`)
  console.log(`响应时间: ${result.responseTime}ms`)

  if (result.error) {
    console.log(`错误: ${result.error}`)
    if (result.error.includes('ENOTFOUND')) {
      console.log(`说明: 该IP地址没有PTR记录（反向DNS记录），这是正常情况`)
    }
  }

  if (result.hostnames.length > 0) {
    console.log(`域名列表:`)
    result.hostnames.forEach((hostname, index) => {
      console.log(`  ${index + 1}. ${hostname}`)
    })
  }
  else {
    console.log(`域名列表: (无)`)
  }

  console.log('-'.repeat(60))
  console.log(`黑名单配置: ${blacklist.length > 0 ? blacklist.join(', ') : '(空)'}`)
  console.log(`黑名单检查: ${allowed ? '✓ 通过 (放行)' : '✗ 拦截'}`)
  console.log('='.repeat(60) + '\n')
}

/**
 * 测试单个IP地址
 */
async function testIp(ip, blacklist = []) {
  try {
    console.log(`正在测试 IP: ${ip}...`)

    const result = await reverseDnsLookup(ip)
    const allowed = checkDnsBlacklist(result.hostnames, blacklist)

    formatResult(ip, result, allowed, blacklist)

    return {
      ip,
      result,
      allowed,
    }
  }
  catch (error) {
    console.error(`测试 IP ${ip} 时发生错误:`, error)
    return null
  }
}

/**
 * 批量测试多个IP地址
 */
async function testMultipleIps(ips, blacklist = []) {
  console.log(`\n开始批量测试 ${ips.length} 个IP地址...\n`)

  const results = []
  for (const ip of ips) {
    const result = await testIp(ip, blacklist)
    if (result) {
      results.push(result)
    }
    // 添加延迟避免DNS查询过快
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  // 统计结果
  console.log('\n' + '='.repeat(60))
  console.log('测试统计')
  console.log('-'.repeat(60))
  console.log(`总测试数: ${results.length}`)
  console.log(`DNS反查成功: ${results.filter(r => r.result.success).length}`)
  console.log(`DNS反查失败: ${results.filter(r => !r.result.success).length}`)
  console.log(`通过黑名单检查: ${results.filter(r => r.allowed).length}`)
  console.log(`被黑名单拦截: ${results.filter(r => !r.allowed).length}`)
  console.log('='.repeat(60) + '\n')

  return results
}

/**
 * 主函数
 */
async function main() {
  // 从环境变量或命令行参数获取黑名单
  const envBlacklist = process.env.DNS_BLACKLIST
    ? process.env.DNS_BLACKLIST.split(',').map(k => k.trim().toLowerCase()).filter(Boolean)
    : []

  // 从命令行参数获取IP地址
  const args = process.argv.slice(2)

  // 默认测试IP列表（包括用户报告的IP）
  const defaultTestIps = [
    '213.130.142.55', // 用户报告的IP（ENOTFOUND错误）
    '8.8.8.8',        // Google DNS（通常有PTR记录）
    '1.1.1.1',        // Cloudflare DNS（通常有PTR记录）
    '127.0.0.1',      // 本地回环地址
    '192.168.1.1',    // 私有IP地址
    'invalid.ip',     // 无效IP格式测试
  ]

  if (args.length > 0) {
    // 如果提供了IP地址，测试指定的IP
    const ip = args[0]
    await testIp(ip, envBlacklist)
  }
  else {
    // 如果没有提供IP，运行默认测试套件
    console.log('未指定IP地址，运行默认测试套件...\n')
    await testMultipleIps(defaultTestIps, envBlacklist)
  }
}

// 运行测试
main().catch((error) => {
  console.error('测试脚本执行失败:', error)
  process.exit(1)
})

