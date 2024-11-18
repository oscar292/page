document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.header__nav-item a');
    const menuCheckbox = document.querySelector('.header__checkbox');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuCheckbox.checked = false;
        });
        });
    });