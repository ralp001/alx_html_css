document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', () => {
        const isVisible = navLinks.getAttribute('data-visible') === 'true';
        
        if (isVisible) {
            navLinks.setAttribute('data-visible', 'false');
            menuBtn.setAttribute('aria-expanded', 'false');
        } else {
            navLinks.setAttribute('data-visible', 'true');
            menuBtn.setAttribute('aria-expanded', 'true');
        }
    });
});