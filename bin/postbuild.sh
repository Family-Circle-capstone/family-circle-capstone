#!/bin/bash

# Navigate to the root directory of the project
cd "$(dirname "$0")/.." || exit

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute/default

# Copy the built Vue application and server files
cp -r ./family-circle/dist ./.amplify-hosting/compute/default/dist
cp ./family-circle/server.js ./.amplify-hosting/compute/default/server.js
cp ./family-circle/package.json ./.amplify-hosting/compute/default/package.json
cp ./family-circle/.env.production ./.amplift-hosting/compute/default/.env.production
cp -r ./family-circle/node_modules ./.amplify-hosting/compute/default/node_modules

# Copy the deployment manifest
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json
