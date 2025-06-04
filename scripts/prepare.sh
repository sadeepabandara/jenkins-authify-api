#!/bin/bash
set -e
mkdir -p /home/ubuntu/app
rsync -av --exclude='node_modules' ./ /home/ubuntu/app
