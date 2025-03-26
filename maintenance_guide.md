# Website Maintenance and Editing Guide

## Overview
This guide provides instructions for maintaining and updating your professional portfolio website. The website is designed to be easily editable, allowing you to keep your portfolio current with your latest achievements and projects.

## Accessing Your Website Files

### Option 1: GitHub Repository (Recommended)
After deploying your website to GitHub Pages (see deployment_guide.md), you can access and edit your files directly through GitHub:

1. Log in to your GitHub account
2. Navigate to your portfolio repository
3. Browse the files in the repository
4. Click on any file to view its contents
5. Click the pencil icon to edit a file
6. Make your changes and commit them

### Option 2: Local Editing
If you prefer to edit files locally before uploading:

1. Download the entire repository from GitHub
2. Make changes using any text editor or HTML editor
3. Test locally by opening the HTML files in your browser
4. Upload the changed files back to GitHub

## Common Updates You Might Want to Make

### Updating Your Professional Experience
To add new job experiences or update existing ones:

1. Open `experience.html`
2. Locate the timeline section
3. Add a new timeline item following the existing format:
```html
<div class="timeline-item right">
    <div class="timeline-content">
        <div class="timeline-date">YEAR - YEAR</div>
        <h3 class="timeline-title">JOB TITLE</h3>
        <div class="timeline-company">COMPANY NAME</div>
        <div class="timeline-description">
            <p>Description of your role and responsibilities.</p>
            <ul>
                <li>Achievement 1</li>
                <li>Achievement 2</li>
                <!-- Add more achievements as needed -->
            </ul>
        </div>
    </div>
</div>
```

### Adding New Portfolio Projects
To add new projects to your portfolio:

1. Open `portfolio.html`
2. Locate the portfolio grid section
3. Add a new portfolio item following the existing format:
```html
<div class="portfolio-item category">
    <div class="portfolio-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="portfolio-content">
        <div class="portfolio-category">CATEGORY</div>
        <h3 class="portfolio-title">PROJECT TITLE</h3>
        <p class="portfolio-description">Brief description of the project.</p>
        <a href="#projectID" class="portfolio-link portfolio-modal-trigger">View Details <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```
4. Add a corresponding modal for the detailed view:
```html
<div id="projectID" class="portfolio-modal">
    <div class="modal-content">
        <!-- Modal content here -->
    </div>
</div>
```

### Updating Your Skills
To update your skills or add new ones:

1. Open `skills.html`
2. Locate the skills section you want to update
3. Add or modify skill items following the existing format

### Updating Contact Information
To update your contact information:

1. Open `contact.html`
2. Locate the contact information section
3. Update the relevant details

## Customizing the Design

### Changing Colors
The website uses CSS variables for consistent coloring. To change the color scheme:

1. Open `css/styles.css`
2. Locate the `:root` section at the top
3. Modify the color values as desired:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    /* Other color variables */
}
```

### Changing Fonts
To change the fonts used on the website:

1. Open `css/styles.css`
2. Update the font-family properties
3. If using Google Fonts, update the link in the HTML head section of each page

## Best Practices for Maintaining Your Portfolio

1. **Regular Updates**: Review and update your portfolio quarterly to include new projects and skills
2. **Content Quality**: Ensure all content is professional, error-free, and relevant to your target audience
3. **Consistency**: Maintain a consistent style and tone throughout your portfolio
4. **Performance**: Optimize images and keep file sizes small for faster loading
5. **Testing**: After making changes, test your website on different devices and browsers

## Getting Help

If you need assistance with more complex changes or encounter issues:

1. Consult GitHub's documentation for GitHub Pages
2. Search for HTML/CSS tutorials for specific features you want to implement
3. Consider hiring a web developer for major redesigns or complex features

Remember, your portfolio is a living document that should evolve with your career. Regular updates will ensure it remains an effective tool for showcasing your professional capabilities.
