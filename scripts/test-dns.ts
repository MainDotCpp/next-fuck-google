#!/usr/bin/env tsx
/**
 * DNS反查测试脚本
 * 
 * 使用方法：
 *   pnpm tsx scripts/test-dns.ts [IP地址]
 * 
 * 示例：
 *   pnpm tsx scripts/test-dns.ts 213.130.142.55
 *   pnpm tsx scripts/test-dns.ts 8.8.8.8
 *   pnpm tsx scripts/test-dns.ts 1.1.1.1
 */

import { reverseDnsLookup } from '../lib/dns'
import { DNS_BLACKLIST } from '../config/route-mapping'

/**
 * 检查DNS反查结果是否在黑名单中
 */
function checkDnsBlacklist(hostnames: string[], blacklist: string[]): boolean {
  // 如果黑名单为空，则放行
  if (blacklist.length === 0)
    return true

  // 如果DNS反查失败（没有域名），则放行（可能是DNS服务器问题）
  if (hostnames.length === 0)
    return true

  // 检查每个域名是否包含黑名单中的任何关键词
  for (const hostname of hostnames) {
    const lowerHostname = hostname.toLowerCase()
    for (const keyword of blacklist) {
      if (lowerHostname.includes(keyword)) {
        return false // 匹配到黑名单，拦截
      }
    }
  }

  return true // 没有匹配到黑名单，放行
}

/**
 * 格式化输出结果
 */
function formatResult(ip: string, result: Awaited<ReturnType<typeof reverseDnsLookup>>, allowed: boolean) {
  console.log('\n' + '='.repeat(60))
  console.log(`IP地址: ${ip}`)
  console.log('-'.repeat(60))
  console.log(`成功: ${result.success ? '✓' : '✗'}`)
  console.log(`响应时间: ${result.responseTime}ms`)
  
  if (result.error) {
    console.log(`错误: ${result.error}`)
  }
  
  if (result.hostnames.length > 0) {
    console.log(`域名列表:`)
    result.hostnames.forEach((hostname, index) => {
      console.log(`  ${index + 1}. ${hostname}`)
    })
  } else {
    console.log(`域名列表: (无)`)
  }
  
  console.log('-'.repeat(60))
  console.log(`黑名单配置: ${DNS_BLACKLIST.length > 0 ? DNS_BLACKLIST.join(', ') : '(空)`}`)
  console.log(`黑名单检查: ${allowed ? '✓ 通过 (放行)' : '✗ 拦截'}`)
  console.log('='.repeat(60) + '\n')
}

/**
 * 测试单个IP地址
 */
async function testIp(ip: string) {
  try {
    console.log(`正在测试 IP: ${ip}...`)
    
    const result = await reverseDnsLookup(ip)
    const allowed = checkDnsBlacklist(result.hostnames, DNS_BLACKLIST)
    
    formatResult(ip, result, allowed)
    
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
async function testMultipleIps(ips: string[]) {
  console.log(`\n开始批量测试 ${ips.length} 个IP地址...\n`)
  
  const results = []
  for (const ip of ips) {
    const result = await testIp(ip)
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
    await testIp(ip)
  } else {
    // 如果没有提供IP，运行默认测试套件
    console.log('未指定IP地址，运行默认测试套件...\n')
    await testMultipleIps(defaultTestIps)
  }
}

// 运行测试
main().catch((error) => {
  console.error('测试脚本执行失败:', error)
  process.exit(1)
})

