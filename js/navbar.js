const hamburger = document.getElementById('hamburger');
const menuItems = document.querySelector('.nav_links');

hamburger.addEventListener('click', () => {
    menuItems.classList.toggle('Active');
})
