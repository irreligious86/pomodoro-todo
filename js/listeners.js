"use strict";

document.querySelector('#test').onkeypress = e => {
    console.log('press:  ' + e);
    console.log('altKey:  ' + e.altKey);
    console.log('ctrlKey:  ' + e.ctrlKey);
    console.log('shiftKey:  ' + e.shiftKey);
    console.log('charCode:  ' + e.charCode);
    console.log('key:  ' + e.key);
    console.log('code:  ' + e.code);

}
const test = document.querySelector('#test');
test.style.left = '0';

