// ============================
// Level 1 — Task 2: JavaScript
// ============================

(function () {
    'use strict';

    // ==========================================
    // TASK A: Interactive Color Button
    // ==========================================

    const colorBtn = document.getElementById('color-btn');
    const colorFeedback = document.getElementById('color-feedback');

    const colors = [
        { bg: '#f59e0b', name: 'Amber' },
        { bg: '#ef4444', name: 'Red' },
        { bg: '#10b981', name: 'Emerald' },
        { bg: '#3b82f6', name: 'Blue' },
        { bg: '#8b5cf6', name: 'Violet' },
        { bg: '#ec4899', name: 'Pink' },
        { bg: '#06b6d4', name: 'Cyan' },
        { bg: '#f97316', name: 'Orange' },
        { bg: '#84cc16', name: 'Lime' },
        { bg: '#6366f1', name: 'Indigo' }
    ];

    let colorIndex = 0;

    function handleColorButtonClick() {
        const currentColor = colors[colorIndex];
        colorBtn.style.backgroundColor = currentColor.bg;

        const textColor = getContrastTextColor(currentColor.bg);
        colorBtn.style.color = textColor;

        colorFeedback.textContent = 'Button color changed to ' + currentColor.name + '!';

        colorIndex = (colorIndex + 1) % colors.length;
    }

    function getContrastTextColor(hexColor) {
        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5 ? '#1e293b' : '#ffffff';
    }

    colorBtn.addEventListener('click', handleColorButtonClick);


    // ==========================================
    // TASK B: Dynamic Greeting
    // ==========================================

    const greetingDisplay = document.getElementById('greeting-display');
    const greetingTime = document.getElementById('greeting-time');

    function updateGreeting() {
        const now = new Date();
        const hour = now.getHours();

        let greeting;
        let emoji;

        if (hour >= 5 && hour < 12) {
            greeting = 'Good Morning';
            emoji = '\u2600\uFE0F';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good Afternoon';
            emoji = '\uD83C\uDF24\uFE0F';
        } else if (hour >= 17 && hour < 21) {
            greeting = 'Good Evening';
            emoji = '\uD83C\uDF05';
        } else {
            greeting = 'Good Night';
            emoji = '\uD83C\uDF19';
        }

        greetingDisplay.textContent = greeting + ', ' + emoji;

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const dateStr = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        greetingTime.textContent = dateStr + ' | ' + hours + ':' + minutes + ':' + seconds;
    }

    updateGreeting();
    setInterval(updateGreeting, 1000);


    // ==========================================
    // TASK C: Addition Calculator
    // ==========================================

    const calcForm = document.getElementById('calculator-form');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultValue = document.getElementById('result-value');
    const calcMessage = document.getElementById('calculator-message');

    function validateNumberInput(value) {
        if (value.trim() === '') {
            return { valid: false, type: 'empty' };
        }

        const trimmed = value.trim();
        if (isNaN(trimmed) || trimmed === '') {
            return { valid: false, type: 'invalid' };
        }

        return { valid: true, value: parseFloat(trimmed) };
    }

    function showCalcMessage(message, isError) {
        calcMessage.textContent = message;
        calcMessage.className = 'calculator-message ' + (isError ? 'error' : 'success');
    }

    function clearCalcMessage() {
        calcMessage.textContent = '';
        calcMessage.className = 'calculator-message';
    }

    function handleCalculatorSubmit(event) {
        event.preventDefault();
        clearCalcMessage();

        const val1 = validateNumberInput(num1Input.value);
        const val2 = validateNumberInput(num2Input.value);

        if (!val1.valid && val1.type === 'empty') {
            showCalcMessage('Please enter both numbers.', true);
            resultValue.textContent = '0';
            return;
        }

        if (!val2.valid && val2.type === 'empty') {
            showCalcMessage('Please enter both numbers.', true);
            resultValue.textContent = '0';
            return;
        }

        if (!val1.valid && val1.type === 'invalid') {
            showCalcMessage('Invalid input: "' + num1Input.value.trim() + '" is not a valid number.', true);
            resultValue.textContent = '0';
            return;
        }

        if (!val2.valid && val2.type === 'invalid') {
            showCalcMessage('Invalid input: "' + num2Input.value.trim() + '" is not a valid number.', true);
            resultValue.textContent = '0';
            return;
        }

        const sum = val1.value + val2.value;

        resultValue.textContent = sum % 1 === 0 ? sum.toString() : parseFloat(sum.toFixed(10)).toString();
        showCalcMessage('Addition completed successfully!', false);
    }

    calcForm.addEventListener('submit', handleCalculatorSubmit);

})();
