#!/bin/bash

# Build and deploy
npm run build
npm run deploy

# Add changes to git
git add .

# Commit changes
git commit -m "Deploying changes"

# Push changes to main branch
git push origin main
