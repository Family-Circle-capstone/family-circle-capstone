#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute/default

cp -r ./family-circle/dist ./.amplify-hosting/compute/default/dist
cp ./family-circle/server.js ./.amplify-hosting/compute/default/server.js
cp -r ./family-circle/node_modules ./.amplify-hosting/compute/default/node_modules

cp -r ./family-circle/public ./.amplify-hosting/static

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json
