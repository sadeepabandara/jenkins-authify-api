#!/bin/bash
cd /home/ubuntu/app
pkill node || true
nohup /usr/bin/npm start > app.log 2>&1 &
