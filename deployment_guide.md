# GitHub Pages Portfolio Deployment Guide

## Overview
This document provides instructions for deploying your portfolio website to GitHub Pages and making future updates.

## Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in to your account (or create one if you don't have it)
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `kishan-portfolio` (or any name you prefer)
4. Make sure the repository is set to "Public"
5. Click "Create repository"

## Step 2: Upload Your Website Files
There are two ways to upload your files:

### Option 1: Using GitHub's Web Interface
1. In your new repository, click "uploading an existing file"
2. Drag and drop all the files from the `github_portfolio` folder
3. Click "Commit changes"

### Option 2: Using Git Commands (For Technical Users)
```bash
# Navigate to your portfolio directory
cd /path/to/github_portfolio

# Initialize Git repository (already done)
git init

# Add all files to the repository
git add .

# Commit the files
git commit -m "Initial portfolio website commit"

# Add the remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/kishan-portfolio.git

# Push the files to GitHub
git push -u origin master
```

## Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "master branch" (or "main branch")
5. Click "Save"
6. Wait a few minutes for your site to be published

Your website will be available at: `https://YOUR_USERNAME.github.io/kishan-portfolio/`

## Making Updates to Your Website

### Option 1: Using GitHub's Web Interface
1. Navigate to your repository on GitHub
2. Find the file you want to edit and click on it
3. Click the pencil icon to edit the file
4. Make your changes
5. Scroll down and click "Commit changes"

### Option 2: Using Git Commands (For Technical Users)
```bash
# Make changes to your local files
# Then add the changes to git
git add .

# Commit the changes
git commit -m "Description of your changes"

# Push to GitHub
git push origin master
```

## Important Files to Edit

Here are the key files you might want to update regularly:

- `index.html` - Your homepage content
- `about.html` - Your professional summary and background
- `experience.html` - Your work history and achievements
- `skills.html` - Your technical and professional skills
- `portfolio.html` - Your project examples and case studies
- `case-study.html` - Your featured KTL Transport case study
- `contact.html` - Your contact information

## Customization Tips

- To change colors: Edit the CSS variables at the top of `css/styles.css`
- To add new projects: Copy an existing project section in `portfolio.html` and modify it
- To update your photo: Replace the image file in the `assets` folder
- To add new pages: Create a new HTML file following the same structure as existing pages

Your portfolio is designed to be easy to edit while maintaining a professional appearance.
