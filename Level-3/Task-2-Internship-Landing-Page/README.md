# Primeor Solutions — Level 3 Task 2: Web Developer Internship Program Landing Page

## Description

This is the final project of the **Primeor Solutions Web Developer Internship Program**. It is a professional landing page for the Web Developer Internship Program, presenting the program overview, benefits, skills, technologies, and contact information in a polished, responsive layout.

The landing page is built entirely with HTML5 and CSS3, demonstrating strong frontend development fundamentals including responsive design, semantic markup, CSS Grid, Flexbox, and a CSS-only mobile navigation.

## Objective

The landing page presents:

- **Internship Overview**: Description of the program and its goals
- **Duration**: As specified by Primeor Solutions
- **Benefits**: Real-world experience, portfolio development, practical frontend exposure, hands-on projects
- **Qualifications**: Desired skills and technologies
- **Call-to-Action**: Apply Now and Learn More buttons
- **Contact Information**: Website, Email, LinkedIn, and Location

## Features

- **Responsive Landing Page**: Adapts across mobile, tablet, and desktop viewports
- **CSS-Only Mobile Navigation**: Hamburger menu using HTML checkbox and CSS (no JavaScript)
- **Internship Hero Section**: Strong headline with CTA buttons
- **About Section**: Program overview with duration
- **Benefits Section**: Four internship highlights with icons
- **Skills & Technologies**: Desired skills and technology cards
- **Project Journey**: Three-level internship progression showcase
- **CTA Section**: Secondary call-to-action with buttons
- **Contact Footer**: Website, Email, LinkedIn, and Location
- **Accessibility**: Semantic HTML, keyboard navigation, focus states, alt text
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

## Technologies Used

- **HTML5** — Semantic markup and document structure
- **CSS3** — Styling, Flexbox, Grid, media queries, and CSS transitions

**No JavaScript is used in this project.** The mobile navigation is implemented purely with HTML and CSS using a checkbox toggle pattern.

## Project Structure

```
Task-2-Internship-Landing-Page/
├── index.html
├── css/
│   └── style.css
├── images/
└── README.md
```

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | Single-column, hamburger navigation |
| Tablet | 768px - 1023px | Two-column layouts, wider spacing |
| Desktop | 1024px+ | Multi-column layouts, horizontal navigation |
| Large Desktop | 1280px+ | Wider container |
| Wide Desktop | 1440px+ | Max-width: 1400px |

## How to Run

1. Open the project folder in your file explorer
2. Open `index.html` in a web browser
3. Alternatively, use VS Code Live Server extension for auto-reload during development

## Internship Requirement Mapping

### Headline

- **Required**: "Web Developer Internship Program at Primeor Solutions"
- **Implementation**: `<h1>` in the hero section (line 36 of index.html)
- **Status**: Complete

### Introduction

- **Required**: Overview of the internship program and duration
- **Implementation**: About section with program description and duration display
- **Status**: Complete

### Highlights

- **Required**: Real-world experience, Portfolio development, Practical frontend exposure, Hands-on projects
- **Implementation**: Four benefit cards in the Benefits section with icons, titles, and descriptions
- **Status**: Complete

### Qualifications

- **Required**: Desired skills and technologies
- **Implementation**: Skills & Technologies section with two columns — Desired Skills list and Technology cards
- **Status**: Complete

### Call-to-Action

- **Required**: Apply Now and Learn More buttons
- **Implementation**: Two CTA button sets — in the hero section and in the dedicated CTA section
- **Status**: Complete

### Contact Information

- **Required**: Website, Email, LinkedIn, Location
- **Implementation**: Footer section with all four contact items
- **Status**: Complete

## Information Notes

The following fields use placeholder or editable values because exact official information was not available in the repository source material:

- **Duration**: Displayed as "As specified by Primeor Solutions"
- **Website**: Uses `www.primeorsolutions.com` (editable placeholder)
- **Email**: Uses `info@primeorsolutions.com` (editable placeholder)
- **LinkedIn**: Uses `linkedin.com/company/primeor-solutions` (editable placeholder)
- **Location**: Uses "Primeor Solutions Office" (editable placeholder)

These values can be updated with official information when available.

## Accessibility Features

- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`)
- Proper heading hierarchy (h1, h2, h3, h4)
- ARIA labels on interactive elements
- Keyboard-accessible navigation
- Visible focus states
- Meaningful alt text on images
- `prefers-reduced-motion` media query support

## Testing Viewports

The following viewport sizes should be tested:

- **Mobile**: 320px, 375px, 430px
- **Tablet**: 768px, 820px
- **Desktop**: 1024px, 1280px, 1440px

## License

This project was created for educational purposes as part of the Primeor Solutions Web Development Internship program.
