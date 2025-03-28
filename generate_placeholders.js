/* Placeholder image generation script */
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directories if they don't exist
const imgDir = path.join(__dirname, 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Function to create a placeholder image
function createPlaceholderImage(filename, width, height, bgColor, text, textColor) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Text
  ctx.fillStyle = textColor;
  ctx.font = `bold ${Math.floor(width/15)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Wrap text if needed
  const words = text.split(' ');
  let line = '';
  const lines = [];
  const maxWidth = width * 0.8;
  
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    
    if (metrics.width > maxWidth && i > 0) {
      lines.push(line);
      line = words[i] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);
  
  // Draw text lines
  const lineHeight = Math.floor(width/12);
  const startY = height/2 - (lines.length * lineHeight)/2;
  
  lines.forEach((line, index) => {
    ctx.fillText(line, width/2, startY + index * lineHeight);
  });
  
  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imgDir, filename), buffer);
  
  console.log(`Created: ${filename}`);
}

// Create profile image placeholder
createPlaceholderImage('profile.jpg', 400, 400, '#4a6fdc', 'Profile Photo', '#ffffff');

// Create case study images
const caseStudies = [
  { name: 'case-study-edi.jpg', text: 'EDI Implementation' },
  { name: 'case-study-erp.jpg', text: 'ERP Implementation' },
  { name: 'case-study-app.jpg', text: 'Customer Service App' },
  { name: 'case-study-strategy.jpg', text: 'Digital Transformation' }
];

caseStudies.forEach(cs => {
  createPlaceholderImage(cs.name, 800, 500, '#34495e', cs.text, '#ffffff');
});

// Create case study detail images
const caseStudyDetails = [
  { name: 'edi-implementation-detail.jpg', text: 'EDI Implementation Detail' },
  { name: 'erp-implementation-detail.jpg', text: 'ERP Implementation Detail' },
  { name: 'app-requirements-detail.jpg', text: 'App Requirements Detail' },
  { name: 'digital-transformation-detail.jpg', text: 'Digital Transformation Detail' }
];

caseStudyDetails.forEach(cs => {
  createPlaceholderImage(cs.name, 800, 500, '#2c3e50', cs.text, '#ffffff');
});

// Create portfolio images
const portfolioItems = [
  { name: 'portfolio-requirements.jpg', text: 'Business Requirements' },
  { name: 'portfolio-automation.jpg', text: 'Email Automation' },
  { name: 'portfolio-strategy.jpg', text: 'Business Strategy' },
  { name: 'portfolio-edi.jpg', text: 'EDI Implementation' },
  { name: 'portfolio-testing.jpg', text: 'Functionality Testing' },
  { name: 'portfolio-uat.jpg', text: 'UAT Testing' },
  { name: 'portfolio-operations.jpg', text: 'Daily Operations' },
  { name: 'portfolio-checklist.jpg', text: 'Operations Checklist' },
  { name: 'portfolio-sop.jpg', text: 'SOP Document' },
  { name: 'portfolio-tracker.jpg', text: 'Customer Tracker' },
  { name: 'portfolio-sharepoint.jpg', text: 'SharePoint Integration' }
];

portfolioItems.forEach(item => {
  createPlaceholderImage(item.name, 600, 400, '#3498db', item.text, '#ffffff');
});

// Create portfolio detail images
const portfolioDetails = [
  { name: 'portfolio-requirements-detail.jpg', text: 'Business Requirements Detail' },
  { name: 'portfolio-automation-detail.jpg', text: 'Email Automation Detail' },
  { name: 'portfolio-strategy-detail.jpg', text: 'Business Strategy Detail' },
  { name: 'portfolio-edi-detail.jpg', text: 'EDI Implementation Detail' },
  { name: 'portfolio-testing-detail.jpg', text: 'Functionality Testing Detail' },
  { name: 'portfolio-uat-detail.jpg', text: 'UAT Testing Detail' },
  { name: 'portfolio-operations-detail.jpg', text: 'Daily Operations Detail' },
  { name: 'portfolio-checklist-detail.jpg', text: 'Operations Checklist Detail' },
  { name: 'portfolio-sop-detail.jpg', text: 'SOP Document Detail' },
  { name: 'portfolio-tracker-detail.jpg', text: 'Customer Tracker Detail' },
  { name: 'portfolio-sharepoint-detail.jpg', text: 'SharePoint Integration Detail' }
];

portfolioDetails.forEach(item => {
  createPlaceholderImage(item.name, 800, 500, '#2980b9', item.text, '#ffffff');
});

console.log('All placeholder images created successfully!');
