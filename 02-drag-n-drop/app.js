const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide');
}

// Находится над территорией 
function dragover(event) {
    event.preventDefault()
}

// Заходим на территорию
function dragenter(event) {
    event.target.classList.add('hovered');
}

// Покидаем место где был placeholder
function dragleave(event) {
    event.target.classList.remove('hovered');
}

// Отпускаем placeholder
function dragdrop(event) {    
    event.target.classList.remove('hovered');
    event.target.append(item);
}