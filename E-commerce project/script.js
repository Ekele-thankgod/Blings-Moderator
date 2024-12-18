const hamburger = document.getElementById ("hamburger");
const backside = document.getElementById ("close-nav");
const navs = document.getElementById ("navbars");



hamburger.addEventListener('click', () => {
    navs.classList.toggle('visibility');
    hamburger.style.display = "none";
});
backside.addEventListener('click', () => {
    navs.classList.toggle('visibility');
    hamburger.style.display = "block";
});