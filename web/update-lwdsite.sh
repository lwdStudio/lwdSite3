#!/bin/sh

# sleep 1 min to wait gitee mirror update
sleep 1m

# update repo
git pull -f origin main

# install dependencies
npm install

# build page
npm run build

