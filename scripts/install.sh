#!/bin/bash
set -e
cd /home/ubuntu/app
echo "Installing dependencies..."
npm install --unsafe-perm
echo "Install complete."
