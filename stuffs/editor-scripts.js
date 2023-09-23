const edit_name_button = document.getElementById('edit-name');
const edit_name_dialog = document.getElementById('edit-name-dialog');
const edit_name_div = document.getElementById('edit-name-dialog-container');
const edit_name_button_real = document.getElementById('edit-name-button');
const project_name = document.getElementById('project-name');

function shake_anim(el) {
    el.addEventListener('mouseover', () => {el.classList.add('fa-shake')});
    el.addEventListener('mouseout', () => {el.classList.remove('fa-shake')});
}

function popup_thing(button, dialog, div) {
    button.addEventListener('click', () => dialog.showModal());
    dialog.addEventListener('click', () => dialog.close());
    div.addEventListener('click', (e) => e.stopPropagation());
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

shake_anim(edit_name_button);
popup_thing(edit_name_button, edit_name_dialog, edit_name_div);
edit_name_button_real.addEventListener('click', () => {
    edit_name_dialog.close();
    project_name.innerText = document.querySelector('span[contenteditable]').innerText;
});

const save = document.getElementById('save-icon');
save.addEventListener('click', async () => { 
    save.classList.add('fa-bounce');
    console.log('HUH?!')
    await sleep(1000);
    save.classList.remove('fa-save');
    save.classList.add('fa-check'); 
    save.classList.add('fa-beat-fade');
    await sleep(2000);
    save.classList.remove('fa-check');
    save.classList.remove('fa-bounce'); 
    save.classList.add('fa-save');
    save.classList.remove('fa-beat-fade');
});