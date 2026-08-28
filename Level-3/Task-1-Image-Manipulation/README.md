# Primeor Solutions — Level 3 Task 1: Image Manipulation

## Description

This project was developed as part of the **Primeor Solutions Web Development Internship**. It demonstrates image manipulation techniques using HTML and CSS, including an interactive image gallery with click-to-enlarge functionality, an automatic CSS-based slideshow, and smooth hover effects throughout.

The project features **VisualScape**, a fictional photography showcase website with a nature/landscape theme.

## Objective

The primary objectives of this task are:

1. **CSS Image Gallery**: Create a gallery with thumbnail images that enlarge when clicked
2. **Automatic Image Slideshow**: Implement a slideshow that automatically transitions between images using HTML and CSS
3. **Image Hover Effects**: Add smooth hover effects and CSS transitions to images

## Features

- **Responsive Image Gallery**: CSS Grid layout with 2-4 columns depending on viewport
- **Click-to-Enlarge Lightbox**: Pure CSS implementation using `:target` selector
- **Automatic Slideshow**: CSS `@keyframes` animation with 20-second cycle
- **Smooth Hover Effects**: Scale transform, brightness filter, and overlay transitions
- **Responsive Design**: Adapts across mobile, tablet, and desktop viewports
- **Reduced Motion Support**: Respects `prefers-reduced-motion` accessibility preference
- **Semantic HTML5**: Proper document structure with meaningful elements
- **Accessible Alt Text**: Descriptive alternative text for all images

## Technologies Used

- **HTML5** — Semantic markup and document structure
- **CSS3** — Styling, Grid, Flexbox, animations, and media queries

**No JavaScript is used in this project.** All interactivity (gallery lightbox, slideshow, hover effects) is implemented purely with HTML and CSS.

## Project Structure

```
Task-1-Image-Manipulation/
├── index.html
├── css/
│   └── style.css
├── images/
│   ├── nature-1.jpg
│   ├── nature-2.jpg
│   ├── nature-3.jpg
│   ├── nature-4.jpg
│   ├── nature-5.jpg
│   ├── nature-6.jpg
│   ├── nature-7.jpg
│   └── nature-8.jpg
└── README.md
```

## How to Run

1. Open the project folder in your file explorer
2. Open `index.html` in a web browser
3. Alternatively, use VS Code Live Server extension for auto-reload during development

## Gallery Implementation

The gallery uses a **CSS-only lightbox** pattern:

1. Each thumbnail is wrapped in an `<a>` tag linking to a unique ID (e.g., `#img1`)
2. Corresponding lightbox overlay elements are placed later in the DOM with matching IDs
3. CSS `:target` selector activates the overlay when the URL fragment matches
4. The close button links back to `#gallery`, dismissing the overlay
5. This approach requires **zero JavaScript**

## Slideshow Implementation

The automatic slideshow uses **CSS `@keyframes` animation**:

- 5 slides cycle through a 20-second animation loop
- Each slide is visible for approximately 4 seconds
- Staggered `animation-delay` values ensure sequential transitions
- Opacity-based fading creates smooth crossfade effects
- The animation loops infinitely using `animation-iteration-count: infinite`

## Hover Effects

The following CSS transitions are applied:

- **Gallery Images**: `transform: scale(1.08)` with `filter: brightness(1.05)` on hover
- **Gallery Overlay**: Opacity transition from 0 to 1 on hover
- **Overlay Button**: Background/color inversion on hover
- **Lightbox Close Button**: Scale transform and background change on hover
- **Navigation Links**: Color transition on hover
- **Footer Links**: Color transition on hover

All transitions use `transition` property with `0.3s ease` or `0.4s ease` timing.

## Responsive Breakpoints

| Breakpoint | Width | Gallery Columns |
|------------|-------|-----------------|
| Mobile | < 768px | 2 columns |
| Tablet | 768px - 1023px | 3 columns |
| Desktop | 1024px+ | 4 columns |
| Large Desktop | 1280px+ | 4 columns (wider container) |
| Wide Desktop | 1440px+ | 4 columns (max-width: 1400px) |

## Internship Requirement Mapping

### Requirement 1 — CSS Image Gallery

- **Status**: Complete
- **Implementation**: Responsive CSS Grid gallery with 8 thumbnail images
- **Click-to-Enlarge**: CSS-only lightbox using `:target` selector
- **Close Control**: Links back to `#gallery` to dismiss overlay
- **Result**: Clicking any thumbnail displays the full-size image in a centered overlay

### Requirement 2 — Automatic Image Slideshow

- **Status**: Complete
- **Implementation**: CSS `@keyframes` animation with staggered delays
- **Images**: 5 nature images participate in the slideshow
- **Timing**: 20-second cycle, ~4 seconds per image
- **Loop**: Infinite repetition
- **Result**: Images automatically transition without user interaction

### Requirement 3 — Hover Effects

- **Status**: Complete
- **Gallery Hover**: Scale transform (1.08x) with brightness increase
- **Overlay Effect**: Smooth opacity fade-in showing "View" button
- **Transitions**: All effects use CSS `transition` property (0.3s-0.4s)
- **Result**: Professional, smooth hover interactions throughout

## Accessibility Features

- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`)
- Proper heading hierarchy (h1, h2, h3, h4)
- Descriptive `alt` text on all images
- Keyboard-accessible navigation links
- `prefers-reduced-motion` media query disables animations
- Lightbox close control is focusable and keyboard accessible

## Testing Viewports

The following viewport sizes should be tested:

- **Mobile**: 320px, 375px, 430px
- **Tablet**: 768px, 820px
- **Desktop**: 1024px, 1280px, 1440px

## License

This project was created for educational purposes as part of the Primeor Solutions Web Development Internship program.
