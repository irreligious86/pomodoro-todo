"use strict";

// window.__jsonpCallback([
//     {"name": "object1" },
//     {"name": "object2" },
//     {"name": "object3" }
// ]);

let renderItem = item => {
    let dataDiv = document.createElement('div');
    dataDiv.classList.add('orange');
    dataDiv.textContent = item.name;
    document.body.appendChild(dataDiv);
};

window.__jsonpCallback = data => {
    for(let i = 0; i < data.length; i++) {
        renderItem(data[i]);
    }
};

let loader = document.createElement('script');
loader.src = 'data.js';
document.body.append(loader);