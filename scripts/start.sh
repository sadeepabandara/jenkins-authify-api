#!/bin/bash
set -e
cd /home/ubuntu/app
echo "Stopping existing Node processes..."
pkill node || true
echo "Starting app..."
nohup npm start > app.log 2>&1 &
