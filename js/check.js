"use strict";

const checkGroup = document.querySelector('.check-group');
const checkItem = document.querySelectorAll('.check-box');

const oneCheck = document.getElementById('one-check');
const twoCheck = document.getElementById('two-check');
const threeCheck = document.getElementById('three-check');
const fourCheck = document.getElementById('four-check');
const fiveCheck = document.getElementById('five-check');
const sixCheck = document.getElementById('six-check');

const changeCheck = evt => {
    const target = evt.target;
    if(target.classList.contains('check-box') && target.checked) {
        checkItem.forEach(item => {
            if(item !== target) {
                item.checked = false;
            } else {
                item.checked === true ? item.checked = true : item.checked = false ;
            }
        })
    }

};

//

oneCheck.addEventListener('change', changeCheck);
twoCheck.addEventListener('change', changeCheck);
threeCheck.addEventListener('change', changeCheck);
fourCheck.addEventListener('change', changeCheck);
fiveCheck.addEventListener('change', changeCheck);
sixCheck.addEventListener('change', changeCheck);