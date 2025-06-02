cd /home/ubuntu/app
pkill node || true
nohup npm start > app.log 2>&1 &
