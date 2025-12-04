/**
 * PM2 Ecosystem Configuration
 *
 * Usage:
 *   pm2 start ecosystem.config.cjs          # Start all apps
 *   pm2 start ecosystem.config.cjs --env production  # Start with production env
 *   pm2 reload ecosystem.config.cjs        # Zero-downtime reload
 *   pm2 delete ecosystem.config.cjs         # Stop and delete all apps
 */

module.exports = {
  apps: [
    {
      name: 'next-fuck-google',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: './',
      instances: '2', // Use all available CPU cores
      exec_mode: 'cluster', // Enable cluster mode for better performance
      watch: false, // Disable watch in production
      max_memory_restart: '1G', // Restart if memory exceeds 1GB
      env: {
        NODE_ENV: 'development',
        PORT: 8888,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8888,
      },
      // Logging configuration
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      time: true, // Prepend timestamp to logs
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true, // Merge logs from all instances

      // Auto restart configuration
      autorestart: true,
      max_restarts: 10, // Maximum number of restarts
      min_uptime: '10s', // Minimum uptime to consider app stable
      restart_delay: 4000, // Delay between restarts (ms)

      // Graceful shutdown
      kill_timeout: 5000, // Time to wait before force kill (ms)
      wait_ready: true, // Wait for ready event
      listen_timeout: 10000, // Time to wait for listen event (ms)

      // Health monitoring
      health_check_grace_period: 3000, // Grace period for health checks (ms)

      // Advanced options
      instance_var: 'INSTANCE_ID', // Environment variable for instance ID
    },
  ],
}
