# Primeor Solutions — Level 2 Task 1: Frontend Frameworks

## Description

This project was created as part of the **Primeor Solutions Web Development Internship — Level 2 Task 1**. It demonstrates practical use of **Bootstrap 5** for building responsive frontend components, including a responsive card, a responsive grid layout, and a professional services section.

## Objective

The objective of this project is to demonstrate:

- Practical use of Bootstrap 5 for responsive frontend development
- Bootstrap card components with image and text
- Bootstrap responsive grid system with breakpoint classes
- Responsive services section using Bootstrap columns
- Bootstrap utilities, containers, rows, and columns
- Professional UI with responsive behavior across devices

## Features

- **Bootstrap Responsive Card** — Featured card with image, title, text, badge, and button
- **Bootstrap Responsive Grid** — 4-column grid that adapts to 2 columns on tablet and 1 on mobile
- **Responsive Services Section** — 3-column services layout that stacks on smaller screens
- **Responsive Navbar** — Bootstrap navbar with mobile hamburger menu
- **Hero Section** — Professional hero with gradient background and image
- **Contact CTA** — Call-to-action section for user engagement
- **Mobile/Tablet/Desktop Support** — Full responsive behavior at all breakpoints

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5 (via CDN)

## Bootstrap Components & Utilities Used

| Component/Utility | Where Used |
|---|---|
| `container` | All sections — centered layout wrapper |
| `row` / `col-lg-*` / `col-md-*` | Grid section, services section, hero, footer |
| `card` / `card-img-top` / `card-body` | Featured card, solution cards, service cards |
| `navbar` / `navbar-toggler` / `collapse` | Responsive navigation bar |
| `btn` / `btn-info` / `btn-outline-*` | CTA buttons, service links |
| `badge` | Featured badge on card |
| `display-*` / `fw-bold` / `lead` | Typography utilities |
| `mb-*` / `ms-auto` / `p-*` | Spacing utilities |
| `d-none` / `d-lg-block` | Responsive visibility |
| `text-center` / `text-muted` | Text utilities |
| `shadow-sm` | Card shadows |
| `rounded` / `rounded-circle` | Border radius |
| `img-fluid` | Responsive images |
| `fixed-top` | Sticky navbar |
| `g-4` | Grid gutters |

## Project Structure

```
Task-1-Frontend-Frameworks/
│
├── index.html
│
├── css/
│   └── style.css
│
├── images/
│   └── (external images via Unsplash URLs)
│
└── README.md
```

## How to Run

1. Navigate to the `Task-1-Frontend-Frameworks` folder.
2. Open `index.html` in any modern web browser.

**Optional:** If using VS Code, right-click `index.html` and select "Open with Live Server" for a local development server.

**Note:** An internet connection is required to load Bootstrap from CDN and images from Unsplash.

## Internship Requirement Mapping

### Requirement 1 — Responsive Card

| Requirement | Implementation |
|---|---|
| Card component | Bootstrap `.card` with `.card-img-top` and `.card-body` |
| Contains image | Unsplash image with `.card-img-top` and descriptive `alt` |
| Contains text | `.card-title` (heading) and `.card-text` (description) |
| Responsive | Bootstrap card naturally adapts to column width via grid |
| Styled | Custom `.card-img-top` height, badge, list items, and button |

### Requirement 2 — Responsive Grid

| Requirement | Implementation |
|---|---|
| Bootstrap container | `.container` wraps the grid section |
| Bootstrap row | `.row.g-4` creates responsive row with gutters |
| Bootstrap columns | `.col-lg-3.col-md-6` — 4 columns on desktop, 2 on tablet |
| Desktop layout | 4 columns in a row (`col-lg-3`) |
| Tablet layout | 2 columns in a row (`col-md-6`) |
| Mobile layout | 1 column per row (default `col-12` behavior) |

### Requirement 3 — Responsive Services Section

| Requirement | Implementation |
|---|---|
| Services section | Dedicated `#services` section with heading |
| At least 3 services | 6 services implemented (Web Dev, Data Analytics, Cloud, Digital Strategy, UI/UX, IT Consulting) |
| Service titles | Each card has `.card-title` with service name |
| Service descriptions | Each card has `.card-text` with description |
| Responsive layout | `.col-lg-4.col-md-6` — 3 columns desktop, 2 tablet, 1 mobile |
| Professional appearance | Cards with left border accent, icon, hover effects |

## Responsive Breakpoints Tested

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | 375px | Single column, stacked layout, hamburger menu |
| Small Tablet | 430px | Single column, full-width cards |
| Tablet | 768px | 2-column grid, 2-column services |
| Laptop | 1024px | 4-column grid, 3-column services |
| Desktop | 1440px | Full layout, 4-column grid, 3-column services |
