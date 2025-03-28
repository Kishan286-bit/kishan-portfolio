/**
 * Main JavaScript for Kishan Shivathaya's Portfolio
 * Author: Manus AI
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Initialize skills tabs
    initSkillsTabs();
    
    // Initialize portfolio filtering
    initPortfolioFilter();
    
    // Initialize case study modals
    initCaseStudyModals();
    
    // Initialize portfolio modals
    initPortfolioModals();
    
    // Initialize contact form
    initContactForm();
    
    // Add scroll event for header
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('#nav ul li a');
    
    // Mobile navigation toggle
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-nav-active');
            this.innerHTML = nav.classList.contains('mobile-nav-active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Navigation active state on scroll
    window.addEventListener('scroll', navActiveState);
    
    // Navigation click events
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile nav if open
            if (nav.classList.contains('mobile-nav-active')) {
                nav.classList.remove('mobile-nav-active');
                mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Update active state of navigation links based on scroll position
 */
function navActiveState() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
}

/**
 * Initialize skills tabs functionality
 */
function initSkillsTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/**
 * Initialize portfolio filtering functionality
 */
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Initialize case study modals
 */
function initCaseStudyModals() {
    const caseStudyButtons = document.querySelectorAll('.case-study-btn');
    const modal = document.getElementById('case-study-modal');
    const modalContent = document.getElementById('case-study-modal-content');
    const closeModal = document.querySelector('#case-study-modal .close-modal');
    
    // Open modal with case study content
    caseStudyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const caseId = this.getAttribute('data-case');
            const templateId = caseId + '-template';
            const template = document.getElementById(templateId);
            
            if (template) {
                modalContent.innerHTML = template.innerHTML;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

/**
 * Initialize portfolio modals
 */
function initPortfolioModals() {
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const modal = document.getElementById('portfolio-modal');
    const modalContent = document.getElementById('portfolio-modal-content');
    const closeModal = document.querySelector('#portfolio-modal .close-modal');
    
    // Portfolio item details
    const portfolioDetails = {
        'requirements': {
            title: 'Business Requirements & Wireframes: Toto Customer Service App',
            description: 'This comprehensive business requirements document outlines the specifications for a customer service application designed to streamline support processes and improve customer satisfaction.',
            skills: ['Requirements Gathering', 'UI/UX Design', 'Process Mapping', 'User Story Development'],
            image: 'img/portfolio-requirements-detail.jpg'
        },
        'automation': {
            title: 'Automation of Email Notifications',
            description: 'This documentation details the implementation of an automated email notification system that reduced response times by 60% and improved communication efficiency across departments.',
            skills: ['Process Automation', 'System Integration', 'Documentation', 'Workflow Design'],
            image: 'img/portfolio-automation-detail.jpg'
        },
        'strategy': {
            title: 'Business Strategy Case Study',
            description: 'A comprehensive digital transformation strategy for a consulting firm, including strategic objectives, implementation roadmap, and change management approach.',
            skills: ['Strategic Analysis', 'Digital Transformation', 'Business Case Development', 'Change Management'],
            image: 'img/portfolio-strategy-detail.jpg'
        },
        'edi-guide': {
            title: 'EDI Implementation Guide',
            description: 'Technical documentation for EDI 204 & 990 implementation with MSC, detailing data mapping, system configuration, and integration procedures.',
            skills: ['EDI Standards', 'System Integration', 'Technical Documentation', 'Data Mapping'],
            image: 'img/portfolio-edi-detail.jpg'
        },
        'testing': {
            title: 'Functionality Testing in UAT',
            description: 'Detailed testing procedures for system functionality validation, demonstrating a methodical approach to quality assurance and verification.',
            skills: ['Test Planning', 'Quality Assurance', 'Defect Management', 'Validation Procedures'],
            image: 'img/portfolio-testing-detail.jpg'
        },
        'uat': {
            title: 'EDI UAT Testing Documentation',
            description: 'Comprehensive user acceptance testing documentation for EDI implementation, showcasing testing methodology and validation procedures.',
            skills: ['UAT Management', 'Test Case Development', 'Stakeholder Coordination', 'Acceptance Criteria'],
            image: 'img/portfolio-uat-detail.jpg'
        },
        'operations': {
            title: 'Daily Operation Record',
            description: 'Spreadsheet tool for tracking daily operations, demonstrating data analysis and operational improvement skills.',
            skills: ['Operations Management', 'Data Tracking', 'Process Optimization', 'Performance Metrics'],
            image: 'img/portfolio-operations-detail.jpg'
        },
        'checklist': {
            title: 'Operations Checklist',
            description: 'Standardized procedure documentation for operational processes, showing process documentation and standardization expertise.',
            skills: ['Process Documentation', 'Standard Operating Procedures', 'Quality Control', 'Training Material Development'],
            image: 'img/portfolio-checklist-detail.jpg'
        },
        'sop': {
            title: 'SOP - Consolidated Logistics Sheets',
            description: 'Standard Operating Procedure for logistics operations, demonstrating process documentation and training material development.',
            skills: ['SOP Development', 'Process Standardization', 'Training Documentation', 'Logistics Operations'],
            image: 'img/portfolio-sop-detail.jpg'
        },
        'tracker': {
            title: 'ABC Existing Customer Tracker',
            description: 'Customer tracking and analysis tool, showcasing data management and customer relationship tracking skills.',
            skills: ['Customer Relationship Management', 'Data Analysis', 'Reporting', 'Business Intelligence'],
            image: 'img/portfolio-tracker-detail.jpg'
        },
        'sharepoint': {
            title: 'Syncing SharePoint to Desktop',
            description: 'Technical guide for system integration, demonstrating technical documentation and user support capabilities.',
            skills: ['Technical Documentation', 'SharePoint Integration', 'User Support', 'Knowledge Base Development'],
            image: 'img/portfolio-sharepoint-detail.jpg'
        }
    };
    
    // Open modal with portfolio content
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const portfolioId = this.getAttribute('data-portfolio');
            const details = portfolioDetails[portfolioId];
            
            if (details) {
                let skillsHtml = '';
                details.skills.forEach(skill => {
                    skillsHtml += `<span class="skill-tag">${skill}</span>`;
                });
                
                const html = `
                    <div class="portfolio-detail">
                        <h2>${details.title}</h2>
                        <div class="portfolio-detail-image">
                            <img src="${details.image}" alt="${details.title}">
                        </div>
                        <div class="portfolio-detail-content">
                            <h3>Overview</h3>
                            <p>${details.description}</p>
                            
                            <h3>Skills Demonstrated</h3>
                            <div class="skills-tags">
                                ${skillsHtml}
                            </div>
                        </div>
                    </div>
                `;
                
                modalContent.innerHTML = html;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

/**
 * Initialize contact form
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would send the form data to a server
            // For now, we'll just show a success message
            
            const formData = new FormData(contactForm);
            let formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            // Validate form
            let isValid = true;
            const requiredFields = ['name', 'email', 'subject', 'message'];
            
            requiredFields.forEach(field => {
                if (!formValues[field] || formValues[field].trim() === '') {
                    isValid = false;
                    const input = document.getElementById(field);
                    input.style.borderColor = 'var(--danger-color)';
                } else {
                    const input = document.getElementById(field);
                    input.style.borderColor = 'var(--border-color)';
                }
            });
            
            if (isValid) {
                // Show success message
                contactForm.innerHTML = `
                    <div class="form-success">
                        <i class="fas fa-check-circle"></i>
                        <h3>Message Sent Successfully!</h3>
                        <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    </div>
                `;
            }
        });
    }
}
