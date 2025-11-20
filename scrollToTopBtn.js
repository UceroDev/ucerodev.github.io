const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.add('opacity-60');
    } else {
        scrollToTopBtn.classList.remove('opacity-60');
        scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
});