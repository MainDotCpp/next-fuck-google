# PM2 Deployment Guide

This guide explains how to deploy the Next.js application using PM2.

## Prerequisites

- Node.js (v18 or higher)
- pnpm installed globally: `npm install -g pnpm`
- PM2 installed globally: `npm install -g pm2`

## Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Build the Application

```bash
pnpm run build
```

### 3. Deploy with PM2

#### Option A: Using the deployment script (Recommended)

```bash
# Production deployment
pnpm run deploy

# Or specify environment
pnpm run deploy production
```

#### Option B: Using PM2 directly

```bash
# Start application
pnpm run pm2:start

# Or manually
pm2 start ecosystem.config.cjs --env production
```

## PM2 Management Commands

### Start/Stop Application

```bash
# Start
pnpm run pm2:start

# Stop
pnpm run pm2:stop

# Restart (with downtime)
pnpm run pm2:restart

# Reload (zero-downtime)
pnpm run pm2:reload
```

### Monitoring

```bash
# View logs
pnpm run pm2:logs

# Monitor resources
pnpm run pm2:monit

# View status
pm2 status

# View detailed info
pm2 show next-fuck-google
```

### Zero-Downtime Reload

When you need to update the application without downtime:

```bash
# Option 1: Using reload script
pnpm run reload

# Option 2: Manual reload
pnpm run build
pnpm run pm2:reload
```

## Configuration

### PM2 Ecosystem Config

The `ecosystem.config.cjs` file contains all PM2 configuration:

- **Cluster Mode**: Enabled for better performance (uses all CPU cores)
- **Auto Restart**: Automatically restarts on crashes
- **Memory Limit**: Restarts if memory exceeds 1GB
- **Logging**: Logs are saved in `./logs/` directory

### Environment Variables

Set environment variables in your system or create a `.env.production` file:

```bash
NODE_ENV=production
PORT=3000
```

## Production Best Practices

### 1. Setup PM2 Startup Script

To ensure PM2 starts on system reboot:

```bash
# Generate startup script
pm2 startup

# Save current process list
pm2 save
```

### 2. Configure Reverse Proxy (Nginx)

Example Nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 3. SSL/HTTPS Setup

Use Let's Encrypt with Certbot:

```bash
sudo certbot --nginx -d your-domain.com
```

### 4. Log Management

PM2 logs are stored in `./logs/` directory. For production, consider:

- Setting up log rotation
- Using centralized logging (e.g., ELK stack, CloudWatch)
- Monitoring log sizes

### 5. Health Checks

The application includes health check endpoints. Monitor them:

```bash
# Check application health
curl http://localhost:3000/api/health
```

## Troubleshooting

### Application won't start

1. Check logs: `pnpm run pm2:logs`
2. Verify build: `pnpm run build`
3. Check port availability: `lsof -i :3000`
4. Verify environment variables

### High memory usage

1. Check current usage: `pm2 monit`
2. Adjust `max_memory_restart` in `ecosystem.config.cjs`
3. Consider reducing `instances` if running out of memory

### Zero-downtime reload not working

1. Ensure cluster mode is enabled
2. Check that `wait_ready` is set to `true`
3. Verify application emits 'ready' event

## Advanced Configuration

### Custom Instance Count

Edit `ecosystem.config.cjs`:

```javascript
instances: 2, // Use 2 instances instead of 'max'
```

### Custom Port

Set PORT environment variable or edit config:

```javascript
env_production: {
  PORT: 8080,
}
```

### Log Rotation

Install PM2 module for log rotation:

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

## Monitoring & Alerts

### PM2 Plus (Optional)

For advanced monitoring, consider PM2 Plus:

```bash
pm2 link <secret_key> <public_key>
```

### Custom Monitoring

Set up monitoring for:
- Application uptime
- Response times
- Error rates
- Resource usage (CPU, memory)

## Security Considerations

1. **Firewall**: Only expose necessary ports
2. **Environment Variables**: Never commit `.env` files
3. **Dependencies**: Regularly update dependencies
4. **HTTPS**: Always use HTTPS in production
5. **PM2 Access**: Restrict PM2 access to authorized users

## Backup & Recovery

1. **Database**: Regular database backups (if applicable)
2. **Code**: Version control (Git)
3. **Configuration**: Backup `ecosystem.config.cjs`
4. **Environment**: Document all environment variables

## Support

For issues or questions:
- Check PM2 documentation: https://pm2.keymetrics.io/
- Check Next.js deployment docs: https://nextjs.org/docs/deployment

