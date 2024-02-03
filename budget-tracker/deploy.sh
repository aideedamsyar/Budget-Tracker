#!/bin/bash

# Define the repository URL variable
REPO_URL="https://github.com/aideedamsyar/budget-tracker.git"

# Your custom domain
CUSTOM_DOMAIN="https://tracker.aideedamsyar.com"

# Build the project
npm run build

# Navigate into the build directory
cd build

# Create a CNAME file with your custom domain
echo $CUSTOM_DOMAIN > CNAME

# Initialize a new git repository
git init

# Add the remote repository
git remote add origin $REPO_URL

# Checkout the gh-pages branch
git checkout -b gh-pages

# Add all the files
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push origin gh-pages --force

# Go back to the root project directory
cd ..
