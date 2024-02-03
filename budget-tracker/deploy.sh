# #!/bin/bash

# # Build and deploy
# npm run build
# npm run deploy

# # Add changes to git
# git add .

# # Commit changes
# git commit -m "Deploying changes"

# # Push changes to main branch
# git push origin main


#!/bin/bash

# Build the project
npm run build

# Navigate into the build directory
cd build

# Initialize a new git repository if one doesn't exist
git init

# Add remote repository
git remote add origin https://github.com/aideedamsyar/budget-trackerYOUR_REPOSITORY_URL

# Checkout the gh-pages branch
git checkout -b gh-pages

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to the gh-pages branch, overwriting the old content
git push origin gh-pages --force

# Navigate back to the original directory
cd ..

# Add changes to git for the main branch
git add .

# Commit changes
git commit -m "Update source"

# Push changes to main branch
git push origin main
