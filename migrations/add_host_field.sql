-- 手动添加 host 字段到 access_logs 表
-- 执行日期: 2024

-- 1. 添加 host 字段（VARCHAR，可为 NULL）
ALTER TABLE access_logs 
ADD COLUMN IF NOT EXISTS host VARCHAR(255);

-- 2. 添加索引以优化查询性能
CREATE INDEX IF NOT EXISTS access_logs_host_idx ON access_logs(host);

-- 验证：查看表结构
-- SELECT column_name, data_type, is_nullable 
-- FROM information_schema.columns 
-- WHERE table_name = 'access_logs' AND column_name = 'host';

-- 验证：查看索引
-- SELECT indexname, indexdef 
-- FROM pg_indexes 
-- WHERE tablename = 'access_logs' AND indexname = 'access_logs_host_idx';
