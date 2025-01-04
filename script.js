let eggTriggered = false; // Flag to track if the Easter egg has been triggered
let messageVisible = false; // Flag to track if the message box is visible
let isAnimating = false; // Flag to block interactions during animation

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

// Toggle the countdown and message box visibility
function countdownClicked() {
    if (isAnimating) return; // Block click if animation is in progress

    if (messageVisible) {
        // Close the message box and reset everything
        const countdownWrapper = document.querySelector('.countdown-wrapper');
        isAnimating = true; // Set animation flag

        countdownWrapper.style.transition = 'transform 1s';
        countdownWrapper.style.transform = 'translateY(0)'; // Reset countdown position
        
        // Remove the message box
        const message = document.querySelector('.like-message');
        if (message) {
            message.remove();
        }

        // Reset flag and style
        eggTriggered = false; // Allow the Easter egg to be triggered again
        messageVisible = false; // Mark the message box as hidden

        setTimeout(() => { isAnimating = false; }, 1000); // Reset the flag after animation duration
    } else if (!eggTriggered) {
        // Trigger Easter egg logic
        eggTriggered = true; // Set the flag to true once the egg is triggered

        // Slide the countdown wrapper higher to create space for the message box
        const countdownWrapper = document.querySelector('.countdown-wrapper');
        isAnimating = true; // Set animation flag

        countdownWrapper.style.transition = 'transform 1s';
        countdownWrapper.style.transform = 'translateY(-85%)'; // Move it higher but leave space below the top

        // After sliding, display the grey box with text
        setTimeout(function () {
            const message = document.createElement('div');
            message.classList.add('like-message');
            message.textContent = "2025 Release Roadmap\nEstimated Date of Completion: 31 December 2025 23:59\n\nGoals/Achievements:\nEat Healthy -\nGo to the gym -\n\n❤️ Will always keep you boys informed about what's to come.";
            document.querySelector('.container').appendChild(message);
        }, 1000); // Delay to ensure the slide happens before showing the box

        messageVisible = true; // Mark the message box as visible

        setTimeout(() => { isAnimating = false; }, 1000); // Reset the flag after animation duration
    }
}

// Prevent right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Disable right-click context menu
});

// Prevent copy event
document.addEventListener('copy', function(e) {
    e.preventDefault(); // Prevent copy event
    alert("Copying text is disabled.");
});

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initialize countdown immediately
