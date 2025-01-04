let clickCount = 0;
let eggTriggered = false; // Flag to check if the Easter egg has been triggered

// Countdown logic for global countdown to the end of the current year
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const endOfYear = new Date(currentYear + 1, 0, 1); // Midnight of January 1

    const timeLeft = endOfYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Easter egg logic: Track clicks on the countdown
function countdownClicked() {
    if (eggTriggered) return; // Prevent multiple clicks after the first trigger
    eggTriggered = true; // Set the flag to true once the egg is triggered

    // Slide the countdown above the text
    document.getElementById('countdown').style.transition = 'transform 1s';
    document.getElementById('countdown').style.transform = 'translateY(-100%)';

    // After sliding, display the grey box with text
    setTimeout(function() {
        const message = document.createElement('div');
        message.classList.add('like-message');
        message.textContent = "2025 Release Roadmap [ COMPLETED ]\nEstimated Date of Completion: 31 December 2025 23:59\n\n@The Team\nGoals/Achievements:\nEat Healthy -\nGo to the gym -\n\n❤️ Will always keep you boys informed about what's to come.";
        document.querySelector('.container').appendChild(message);
    }, 1000); // Delay to ensure the slide happens before showing the box
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initialize countdown immediately
