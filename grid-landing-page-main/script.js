
const today = new Date();

const formatDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})

document.querySelector("#dayofweek").textContent = formatDate;


const hamburgerButton = document.querySelector("#hamburger-btn");

const menu = document.querySelector("#menu");

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});






