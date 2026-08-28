# Primeor Solutions — Level 2 Task 2: Responsive Design

## Description

This project was created as part of the **Primeor Solutions Web Development Internship**. It demonstrates responsive web design using HTML and CSS, specifically showcasing mobile-first design principles, CSS media queries, and a CSS-only hamburger navigation menu.

The project features a professional company website for **Nexora Digital** that adapts seamlessly across mobile, tablet, and desktop screen sizes.

## Objective

The primary objectives of this task are:

- **CSS Media Queries**: Implement responsive breakpoints that adapt the layout to different screen sizes
- **Responsive Webpage**: Create a webpage that provides an optimal viewing experience across all devices
- **Mobile-Friendly Navigation**: Build a hamburger menu using HTML and CSS for mobile devices
- **Screen Optimization**: Optimize layouts for mobile, tablet, and desktop viewports

## Features

- **Responsive Navigation**: Horizontal navigation on desktop, hamburger menu on mobile
- **CSS-Only Hamburger Menu**: Fully functional using HTML checkbox and CSS (no JavaScript)
- **Responsive Hero Section**: Stacks vertically on mobile, side-by-side on desktop
- **Responsive Content Section**: Adapts from single to multi-column layout
- **Responsive Service Cards**: Grid layout that adjusts from 1 column to 3 columns
- **Responsive Images**: All images scale properly with max-width: 100%
- **Responsive Typography**: Uses clamp() for fluid font sizing
- **Mobile/Tablet/Desktop Layouts**: Distinct layouts optimized for each viewport

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Styling, flexbox, grid, and media queries

**Note**: This project uses no JavaScript. The hamburger menu is implemented purely with HTML and CSS using a checkbox toggle pattern.

## Responsive Breakpoints

| Breakpoint | Width | Target Device |
|------------|-------|---------------|
| Mobile | 320px - 767px | Small smartphones to large phones |
| Tablet | 768px - 1023px | Tablets and small laptops |
| Desktop | 1024px+ | Desktop computers and large screens |
| Large Desktop | 1280px+ | Wide monitors |
| Wide Desktop | 1440px+ | Ultra-wide displays |

## Project Structure

```
Task-2-Responsive-Design/
├── index.html
├── css/
│   └── style.css
└── README.md
```

## How to Run

1. Open the project folder in your file explorer
2. Open `index.html` in a web browser
3. Alternatively, use VS Code Live Server extension for auto-reload during development

## Internship Requirement Mapping

### Requirement 1 — Responsive Webpage

- **Status**: Complete
- **Implementation**: CSS media queries at 768px, 1024px, 1280px, and 1440px breakpoints
- **Result**: Layout adapts between mobile, tablet, and desktop views

### Requirement 2 — Mobile-Friendly Navigation

- **Status**: Complete
- **Implementation**: CSS-only hamburger menu using hidden checkbox + label + CSS selectors
- **Result**: Navigation collapses to hamburger on mobile, opens/closes on click, returns to horizontal nav on desktop

### Requirement 3 — Screen Optimization

- **Status**: Complete
- **Implementation**: Mobile-first CSS approach with progressive enhancement
- **Results**:
  - **Mobile**: Single-column layout, stacked content, hamburger navigation
  - **Tablet**: Two-column layouts, wider spacing, adapted service cards
  - **Desktop**: Multi-column layouts, horizontal navigation, full-width hero

## CSS Architecture

The stylesheet follows a mobile-first approach with the following organization:

1. Reset/Base Styles
2. Typography
3. Container
4. Buttons
5. Header & Navigation (Mobile)
6. Hero Section (Mobile)
7. About Section (Mobile)
8. Services Section (Mobile)
9. CTA Section (Mobile)
10. Footer (Mobile)
11. Tablet Breakpoint (768px)
12. Desktop Breakpoint (1024px)
13. Large Desktop (1280px)
14. Wide Desktop (1440px)

## Hamburger Menu Implementation

The hamburger menu uses a CSS-only approach:

1. A hidden checkbox input (`<input type="checkbox" id="nav-toggle">`)
2. A label styled as a hamburger icon (`<label for="nav-toggle">`)
3. Navigation menu element (`<nav>`)
4. CSS selectors that toggle visibility when checkbox is checked

This approach provides:
- Keyboard accessibility (checkbox can be toggled with Space/Enter)
- Smooth CSS transitions
- No JavaScript dependency
- Clean state management

## Accessibility Features

- Semantic HTML5 elements (header, nav, main, section, article, footer)
- Proper heading hierarchy (h1, h2, h3, h4)
- ARIA labels on interactive elements
- Focus states for keyboard navigation
- Sufficient color contrast
- Meaningful alt text on images

## Testing Viewports

The following viewport sizes should be tested:

- **Mobile**: 320px, 375px, 430px
- **Tablet**: 768px, 820px
- **Desktop**: 1024px, 1280px, 1440px

## License

This project was created for educational purposes as part of the Primeor Solutions Web Development Internship program.
