# Primeor Solutions — Level 1 Task 2: JavaScript

## Description

This project was created as part of the **Primeor Solutions Web Development Internship — Level 1 Task 2**. It demonstrates fundamental JavaScript concepts through three interactive features: a color-changing button, a time-based greeting system, and a simple addition calculator.

## Objective

The objective of this project is to demonstrate:

- JavaScript DOM manipulation
- Event handling with `addEventListener`
- Conditional statements and time-based logic
- Date/time handling with the `Date` object
- Form and input handling with validation
- Arithmetic operations
- Dynamic webpage updates without page reload
- Clean CSS styling with responsive design

## Features

- **Interactive Color Button** — Clicking the button cycles through 10 distinct colors with smooth CSS transitions and auto-contrasting text.
- **Time-Based Greeting** — Displays "Good Morning", "Good Afternoon", "Good Evening", or "Good Night" based on the current system time, with a live-updating clock.
- **Addition Calculator** — Accepts two numbers, validates input (empty, invalid, zero, decimals), performs addition, and displays the result instantly via DOM manipulation.
- **Input Validation** — Handles empty inputs, non-numeric values, and correctly processes zero and decimal numbers.
- **Responsive UI** — Adapts to desktop, tablet, and mobile screens using CSS media queries.
- **Accessibility** — Semantic HTML, proper labels, visible focus states, and text-based error messages.

## Technologies

- HTML5
- CSS3
- JavaScript (ES5+)

## Project Structure

```
Task-2-JavaScript/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

## How to Run

1. Navigate to the `Task-2-JavaScript` folder.
2. Open `index.html` in any modern web browser.

**Optional:** If using VS Code, right-click `index.html` and select "Open with Live Server" for a local development server.

## Internship Requirement Mapping

### Requirement 1 — Interactive Button

| Requirement | Implementation |
|---|---|
| Button changes background color on click | `color-btn` cycles through 10 colors via `addEventListener` |
| Has proper CSS styling | Styled with padding, border-radius, transitions, hover effects |
| Looks visually attractive | Uses a color palette with smooth transitions and shadow effects |
| Is user-friendly | Readable text auto-adjusts contrast; feedback text confirms the change |

### Requirement 2 — Dynamic Greeting

| Requirement | Implementation |
|---|---|
| Displays Good Morning | Shown when current hour is 5–11 |
| Displays Good Afternoon | Shown when current hour is 12–16 |
| Displays Good Evening | Shown when current hour is 17–20 |
| Uses current system time | JavaScript `Date` object reads `getHours()` |
| Uses conditional logic | `if / else if / else` block determines the greeting |
| Updates dynamically | Greeting renders on page load; clock updates every second |

### Requirement 3 — Addition Calculator

| Requirement | Implementation |
|---|---|
| Accepts two number inputs | Two `<input>` fields with labels |
| Performs addition | `parseFloat(val1) + parseFloat(val2)` |
| Displays result instantly | DOM manipulation updates `#result-value` without page reload |
| Input validation — empty fields | Checks for empty/whitespace-only values |
| Input validation — invalid input | Validates with `isNaN()` check |
| Handles zero correctly | `0 + 5 = 5` works correctly |
| Handles decimal values | `10.5 + 5.25 = 15.75` works correctly |

## Technologies Used

Only the following technologies are actually used in this project:

- **HTML5** — Semantic markup with `header`, `main`, `section`, `footer`, `form`, `label`, `input`, `button`
- **CSS3** — Flexbox layout, CSS custom properties, media queries, transitions, `border-radius`, `box-shadow`
- **JavaScript (ES5+)** — `addEventListener`, `getElementById`, `Date`, `isNaN`, `parseFloat`, `textContent`, `setInterval`, `padStart`

No external libraries, frameworks, or build tools are used.
