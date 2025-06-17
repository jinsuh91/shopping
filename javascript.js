document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.header-container ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (currentPath === linkPath || (currentPath === '#' && linkPath === 'about.html' && linkPath !== '')) {
            link.classList.add('active');
        }
    });
});