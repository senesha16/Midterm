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