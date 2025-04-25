// Select all skill percentage spans
const skillPercentages = document.querySelectorAll('.skill-percentage');

// Loop through each skill percentage and set the progress bar width
skillPercentages.forEach(skill => {
    const percentage = skill.getAttribute('data-skill'); // Get the percentage value
    const progressBar = skill.parentElement.nextElementSibling.querySelector('.progress-bar');
    progressBar.style.width = `${percentage}%`; // Set the width of the progress bar
    progressBar.setAttribute('aria-valuenow', percentage); // Update the ARIA value for accessibility
});