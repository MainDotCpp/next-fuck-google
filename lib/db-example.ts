/**
 * Prisma 数据库使用示例
 * 
 * 这个文件展示了如何在项目中使用 Prisma 进行数据库操作
 * 实际使用时，请删除此文件或将其重命名为实际用途的文件
 */

import { db } from './db'

// 示例：查询所有用户
export async function getAllUsers() {
  try {
    const users = await db.user.findMany()
    return users
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

// 示例：根据 ID 查询用户
export async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: { id },
    })
    return user
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}

// 示例：创建用户
export async function createUser(email: string, name?: string) {
  try {
    const user = await db.user.create({
      data: {
        email,
        name,
      },
    })
    return user
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}

// 示例：检查路径访问权限（与你的 checkAccess 功能相关）
export async function checkPathAccess(path: string): Promise<boolean> {
  try {
    const rule = await db.accessRule.findUnique({
      where: { path },
    })
    
    // 如果规则不存在，默认允许访问
    if (!rule) {
      return true
    }
    
    return rule.allowed
  } catch (error) {
    console.error('Error checking path access:', error)
    // 出错时默认允许访问
    return true
  }
}

// 示例：创建或更新访问规则
export async function upsertAccessRule(path: string, allowed: boolean) {
  try {
    const rule = await db.accessRule.upsert({
      where: { path },
      update: { allowed },
      create: {
        path,
        allowed,
      },
    })
    return rule
  } catch (error) {
    console.error('Error upserting access rule:', error)
    throw error
  }
}

