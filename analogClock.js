const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

// Update the clock every second
function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation degrees
    const hoursDeg = (hours % 12) * 30 + minutes * 0.5; // 12-hour clock
    const minutesDeg = minutes * 6 + seconds * 0.1;
    const secondsDeg = seconds * 6;

    // Apply rotations
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
}

const clockFace = document.querySelector('.clock');

// Function for creating the markings
function createMarks() {
    for (let i = 0; i < 60; i++) {
        const mark = document.createElement('div');
        
        if (i % 5 === 0) {
            // Hour markers
            mark.classList.add('hour-mark');
        } else {
            // Minute markers
            mark.classList.add('minute-mark');
        }
        
        mark.style.transform = `translateX(-50%) rotate(${i * 6}deg)`; // Rotate each mark by 6°
        clockFace.appendChild(mark);
    }
}

// Function to toggle between light and dark modes
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode'); // Save preference to localStorage
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Save preference to localStorage
    }
}

// Create a theme toggle button
const themeToggleBtn = document.createElement('button');
themeToggleBtn.className = 'theme-toggle';
themeToggleBtn.innerText = 'Switch Mode';
themeToggleBtn.addEventListener('click', toggleTheme);
document.body.appendChild(themeToggleBtn);

// Set the initial theme based on saved preference or default
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-mode'; // Default to light mode
    if (savedTheme === 'dark-mode') {
        document.body.classList.add('dark-mode'); // Apply dark mode if saved preference is dark
    } else {
        document.body.classList.add('light-mode'); // Apply light mode if saved preference is light
    }
}


// Initialize the theme when the page loads
initializeTheme();

// Initialization
createMarks();

// Initialize the clock
setInterval(updateClock, 1000);
updateClock(); // Run once to avoid delay

