const hamburger = document.querySelector('.hamburger img');
const menu = document.querySelector('.right');
const close_menu = document.querySelector('.close-menu');
//document.getElementById("img1").style.zIndex = "1";

window.addEventListener('resize', function (e) {
    if (window.innerWidth > 810) {
        menu.style.transform = 'translateX(0)';
    } else {
        menu.style.transform = 'translateX(100vw)';
    }
});
hamburger.addEventListener('click', function (e) {
    menu.style.transform = 'translateX(-50vw)';
});

close_menu.addEventListener('click', function (e) {
    menu.style.transform = 'translateX(50vw)';
});
