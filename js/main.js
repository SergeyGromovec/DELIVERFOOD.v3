window.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelectorAll('.food-row'),
     buttons = document.querySelectorAll('button'),
     openBtn = document.querySelector('.open');

     function createCart() {
         
     }
});

const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
}
new WOW().init();


