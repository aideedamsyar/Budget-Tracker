#!/bin/bash

# Define the repository URL variable
REPO_URL="https://github.com/aideedamsyar/budget-tracker.git"

# Build the project
npm run build

# Navigate into the build directory
cd build

# If there's a nested 'budget-tracker' structure, move everything up a level
if [ -d "budget-tracker" ]; then
    # Move the contents up and delete the now empty subdirectory
    mv budget-tracker/* .
    rmdir budget-tracker
fi

# Initialize a new git repository
git init

# Add the remote repository
git remote add origin $REPO_URL

# Checkout the gh-pages branch
git checkout -b gh-pages

# If your GitHub Pages is set to use the /docs folder, uncomment the following lines:
# mkdir -p docs
# mv * docs

# Add all the files
git add .

# Commit the changes
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push origin gh-pages --force

# Go back to the root project directory
cd ..
