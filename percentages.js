document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-skill');
        bar.style.width = `${percentage}%`; // Set the width of the progress bar
    });
});