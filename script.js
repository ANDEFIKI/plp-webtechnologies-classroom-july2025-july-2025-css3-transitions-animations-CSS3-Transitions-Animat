// script.js - JavaScript Functions & Animation Triggers Assignment

// Part 2: Functions, Scope, Parameters, Return Values
// Function with parameters and return value
function addNumbers(a, b) {
    return a + b;
}

// Demonstrate local vs global scope
let globalVar = "I'm global!";
function showScopeDemo() {
    let localVar = "I'm local!";
    document.getElementById('scope-output').textContent =
        `Global: ${globalVar} | Local: ${localVar}`;
}

// Use function to calculate and display result
function calculateAndShow(x, y) {
    const result = addNumbers(x, y);
    document.getElementById('calc-output').textContent =
        `Result: ${x} + ${y} = ${result}`;
}

// Part 3: Combining CSS & JS for Animation
// Animate box on button click
const animateBoxBtn = document.getElementById('animate-box-btn');
const jsAnimatedBox = document.getElementById('js-animated-box');
animateBoxBtn.addEventListener('click', function() {
    jsAnimatedBox.classList.add('animated');
    // Remove class after animation ends for reusability
    setTimeout(() => jsAnimatedBox.classList.remove('animated'), 1000);
});

// Card flip animation on button click
const flipCardBtn = document.getElementById('flip-card-btn');
const flipCard = document.getElementById('flip-card');
flipCardBtn.addEventListener('click', function() {
    flipCard.classList.toggle('flipped');
});

// Example: Loading animation trigger (bonus)
const loadDataBtn = document.getElementById('load-data-btn');
const loadingBox = document.getElementById('loading-box');
loadDataBtn.addEventListener('click', function() {
    loadingBox.classList.add('loading');
    // Simulate loading complete after 3 seconds
    setTimeout(() => loadingBox.classList.remove('loading'), 3000);
});
