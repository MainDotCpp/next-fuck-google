// 验证 host 字段是否存在于 Prisma Client 类型中
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  adapter: undefined as any, // 仅用于类型检查
})

// 类型检查：如果 host 字段不存在，这里会报错
type TestType = Parameters<typeof prisma.accessLog.create>[0]['data']

// 验证 host 字段是否存在
const testData: TestType = {
  requestId: 'test',
  path: '/test',
  clientIp: '127.0.0.1',
  languageCheckPassed: true,
  urlParamsCheckPassed: true,
  apiCheckPassed: true,
  allowed: true,
  responseTime: 100,
  host: 'localhost', // 如果这行报错，说明 host 字段不存在
}

console.log('✅ host field exists in Prisma Client types')
console.log('Test data:', testData)
