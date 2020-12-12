"use strict";
(function(){
    let setupDialogElement = document.querySelector('.setup-window').content.querySelector('.setup-window-1');
    let dialogHandler = setupDialogElement.querySelector('.setup-window-form');

    dialogHandler.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        let startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        let dragged = false;

        let onMouseMove = moveEvt => {
            moveEvt.preventDefault();
            dragged = true;

            let shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
            setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

        };

        let onMouseUp = upEvt => {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            if (dragged) {
                let onClickPreventDefault = evt => {
                    evt.preventDefault();
                    dialogHandler.removeEventListener('click', onClickPreventDefault)
                };
                dialogHandler.addEventListener('click', onClickPreventDefault);
            }

        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
})(); //IIFE


