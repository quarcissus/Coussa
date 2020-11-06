const hamburger = document.querySelector('.hamburger img');
const menu = document.querySelector('.right');
const close_menu = document.querySelector('.close-menu');
//document.getElementById("img1").style.zIndex = "1";
let product_selected = '';
const modal = document.querySelector('.modal');
const services_type = document.querySelectorAll('.product-item');
const postProduct_btn = document.querySelector('.postProduct-btn');
const sendInfo_btn = document.querySelector('.sendInfo-btn');
const product_btn = document.querySelector('.landing__cta');
const closeModal = document.querySelector('.closeModal');

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
closeModal.addEventListener('click', function (e) {
    document.querySelector('.products__select').style.display = 'flex';
    document.querySelector('.modal-wrapper').style.display = 'none';
    document.querySelector('.form-postProduct').style.display = 'none';
    document.querySelector('.form-sendInfo').style.display = 'none';
});
product_btn.addEventListener('click', function (e) {
    document.querySelector('.modal-wrapper').style.display = 'flex';
});

for (let index = 0; index < services_type.length; index++) {
    services_type[index].addEventListener('click', function (e) {
        document.querySelector('.main_title').style.display = 'none';
        document.querySelector('.quote').style.display = 'flex';
        document.querySelector('.products__select').style.display = 'none';
        document.querySelector('.form-postProduct').style.display = 'flex';
        modal.style.height = '70vh';
        // obtiene el dataset el produto seleccionado
        product_selected = services_type[index].dataset.type;
        console.log(product_selected);
    });
}

postProduct_btn.addEventListener('click', function (e) {
    document.querySelector('.form-postProduct').style.display = 'none';
    // DEBE GUARDAR LOS DATOS CAPTURAS EN EL FORM ANTERIOR PARA PODERLE ENVIAR LA INFO A EL TRABAJADOR
    document.querySelector('.form-sendInfo').style.display = 'flex';
    modal.style.height = '75vh';
    document.querySelector('#product').value = product_selected.toUpperCase();
    document.querySelector('#product').disabled = true;
});

sendInfo_btn.addEventListener('click', function (e) {
    document.querySelector('.modal-wrapper').style.display = 'none';
});
