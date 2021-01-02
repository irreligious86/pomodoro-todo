"use strict";

const addTaskBtn = qs('.btn-add-task'); // create button for add task

const overlay = qs('.setup-window-box');
const overlayForm = qs('.setup-window-form', overlay);
const closeBtn = qs('.close-button', overlayForm);
const acceptBtn = qs('.ok-button', overlayForm);
const blur = document.createElement('div');

const openPortal = () => {
    if (overlay.classList.contains('hidden')) {
        overlayForm.reset();
        document.body.append(overlay);
        overlay.classList.toggle('hidden');
        document.body.style.overflow = 'hidden';
        document.body.append(blur);
        blur.classList.remove('hidden');
        blur.classList.add('blur');
    }
};

const closePortal = () => {
    overlayForm.reset();
    document.body.style.overflow = '';
    overlay.classList.toggle('hidden');
    overlay.remove();
    blur.classList.remove('blur');
    blur.classList.add('hidden');
};

const acceptPortal = () => {
    const newtask = currentArray.addTask();
    const t = qs('.set-deadline-input', overlay).value;
    newtask.setTitle(qs('.set-title-input', overlay).value);
    newtask.setImportance(qs('.set-importance-input', overlay).value);
    newtask.setCategory(qs('.set-category-input', overlay).value);
    newtask.setCreateDate(new Date().getTime());
    newtask.setDeadline(new Date(t).getTime());
    newtask.setDescription(qs('.set-description-input', overlay).value);
};

const fullAccept = () => {
    acceptPortal();
    closePortal();
    removeAllTasks();
    renderAllTasks(currentArray);
};

const escapeTaskSetter = evt => {
    if (evt.keyCode === 27 && !overlay.classList.contains('hidden')) {
        overlayForm.reset();
        overlay.remove();
        blur.classList.add('hidden');
        document.body.style.overflow = '';
    }
};

addTaskBtn.addEventListener('click', openPortal);
closeBtn.addEventListener('click', closePortal);
acceptBtn.addEventListener('click', fullAccept);
document.addEventListener('keydown', escapeTaskSetter);