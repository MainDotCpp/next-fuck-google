-- 手动添加 userAgent 字段到 access_logs 表
-- 执行日期: 2024

-- 添加 userAgent 字段（VARCHAR，可为 NULL）
ALTER TABLE access_logs 
ADD COLUMN IF NOT EXISTS user_agent TEXT;

-- 验证：查看表结构
-- SELECT column_name, data_type, is_nullable 
-- FROM information_schema.columns 
-- WHERE table_name = 'access_logs' AND column_name = 'user_agent';
