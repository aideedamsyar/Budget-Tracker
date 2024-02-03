#!/bin/bash

# Define the repository URL variable
REPO_URL="https://github.com/aideedamsyar/budget-tracker.git"

# Build the project
npm run build

# Navigate into the build directory
cd build

# Remove the nested directory structure by moving the contents
# up to the root of the gh-pages branch
# Assuming the build outputs directly to the build/ folder
# and does not need to move into another directory

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
