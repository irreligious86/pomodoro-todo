
"use strict";


const showModal = function() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.remove('hidden');
    document.querySelector(modalId).classList.remove('hidden');
    document.querySelector(modalId).parentElement.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

const closeModal = function() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.add('hidden');
    document.querySelector(modalId).classList.add('hidden');
    document.querySelector(modalId).parentElement.style.display = 'none';
    document.body.style.overflow = '';
}

const closeModalWrap = function () {
    this.classList.add('hidden');
    // this.children[0].classList.add('hidden');
    // this.style.display = 'none';
}

document.querySelectorAll('.modal-show').forEach( item => {
    item.onclick = showModal;
})

document.querySelectorAll('.modal-close').forEach( item => {
    item.onclick = closeModal;
})

document.querySelectorAll('.modal-wrap').forEach( item => {
    item.onclick = closeModalWrap;
})