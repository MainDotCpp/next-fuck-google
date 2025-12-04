#!/bin/bash

# PM2 Deployment Script for Next.js Application
# This script handles building and deploying the application with PM2

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="next-fuck-google"
PM2_CONFIG="ecosystem.config.cjs"
ENV=${1:-production}  # Default to production if not specified

echo -e "${GREEN}🚀 Starting deployment process...${NC}"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${RED}❌ PM2 is not installed. Please install it first:${NC}"
    echo "   npm install -g pm2"
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo -e "${RED}❌ pnpm is not installed. Please install it first:${NC}"
    echo "   npm install -g pnpm"
    exit 1
fi

# Create logs directory if it doesn't exist
mkdir -p logs

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
pnpm install --frozen-lockfile

# Build the application
echo -e "${YELLOW}🔨 Building application...${NC}"
pnpm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed. Aborting deployment.${NC}"
    exit 1
fi

# Stop existing PM2 process if running
echo -e "${YELLOW}🛑 Stopping existing PM2 processes...${NC}"
pm2 delete $APP_NAME 2>/dev/null || true

# Start application with PM2
echo -e "${GREEN}▶️  Starting application with PM2 (${ENV} environment)...${NC}"
pm2 start $PM2_CONFIG --env $ENV

# Save PM2 process list
pm2 save

# Show PM2 status
echo -e "${GREEN}✅ Deployment completed!${NC}"
echo -e "${GREEN}📊 Current PM2 status:${NC}"
pm2 status

echo -e "\n${GREEN}Useful commands:${NC}"
echo "  pm2 logs $APP_NAME          # View logs"
echo "  pm2 monit                   # Monitor resources"
echo "  pm2 reload $APP_NAME        # Zero-downtime reload"
echo "  pm2 restart $APP_NAME       # Restart application"
echo "  pm2 stop $APP_NAME          # Stop application"
echo "  pm2 delete $APP_NAME        # Delete application"

