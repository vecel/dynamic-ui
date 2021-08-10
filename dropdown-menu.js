const dropdownMenu = document.querySelector('div.dropdown-menu');

const menuLabel = dropdownMenu.querySelector('.menu-label');
const menuUl = dropdownMenu.querySelector('ul');
const arrow = dropdownMenu.querySelector('.arrow');

menuLabel.addEventListener('click', () => {
    toggleVisibility();
    animateArrow();
});

const toggleVisibility = function toggleDropdownMenuVisibility () {
    if (isDisplayed()) {
        menuUl.style.display = 'none';
    } else {
        menuUl.style.display = 'block';
    }
}

const isDisplayed = function isDropdownMenuDisplayed () {
    return menuUl.style.display === 'block';
}

const animateArrow = function animateDropdownArrow () {
    if (isRotated()) {
        arrow.style.transform = '';
    } else {
        arrow.style.transform = 'rotate(180deg)';
    }
}

const isRotated = function isDropdownArrowRotated () {
    return arrow.style.transform !== '';
}