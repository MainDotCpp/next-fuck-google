#!/bin/bash

# Zero-downtime reload script for PM2
# This script rebuilds and reloads the application without downtime

set -e

APP_NAME="next-fuck-google"
PM2_CONFIG="ecosystem.config.cjs"
ENV=${1:-production}

echo "🔄 Starting zero-downtime reload..."

# Install dependencies
pnpm install --frozen-lockfile

# Build the application
echo "🔨 Building application..."
pnpm run build

# Reload PM2 (zero-downtime)
echo "🔄 Reloading PM2..."
pm2 reload $PM2_CONFIG --env $ENV

echo "✅ Reload completed!"

