document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const setActiveLink = () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Consider a section "in view" if the scroll position is within its bounds
            if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    };

    // Run on scroll
    window.addEventListener('scroll', setActiveLink);

    // Run initially to set active link on page load
    setActiveLink();
});

document.addEventListener('DOMContentLoaded', () => {
    const drawers = document.querySelectorAll('.hobby-drawer');

    drawers.forEach(drawer => {
        const header = drawer.querySelector('.drawer-header');
        const content = drawer.querySelector('.drawer-content');

        header.addEventListener('click', () => {
            const isOpen = content.classList.contains('show');
            // Close all drawers
            drawers.forEach(d => d.querySelector('.drawer-content').classList.remove('show'));
            // Open clicked drawer if it wasn't open
            if (!isOpen) {
                content.classList.add('show');
            }
        });
    });
});

var myCarousel = document.querySelector('#hobbiesCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000,
    wrap: true
}); 

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("firstname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form fields
    if (!name || !email || !message) {
        // Show SweetAlert error if fields are empty
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill out all fields before submitting!",
            confirmButtonColor: "#FF748B", // Custom button color
        });
    } else {
        // Show SweetAlert success if all fields are filled
        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "The owner received your message. We'll get back to you soon!",
            confirmButtonColor: "#FF748B", // Custom button color
        });

        // Clear the form fields
        document.getElementById("contactForm").reset();
    }
});