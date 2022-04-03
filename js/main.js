
const options = document.querySelectorAll('.option'),
    select = document.querySelector('.select'),
    selectHeader = document.querySelector('.selectHeader'),
    selectBody = document.querySelector('.selectBody'),
    wrapper = document.querySelector('.wrapper');

let out = '';

selectHeader.onclick = openList;
wrapper.onmouseleave = cursorLeaveWrapper;


options.forEach(item => {
    item.onclick = () => selectItem(item);
})


function openList() {
    selectHeader.style.display = 'none';
    selectBody.style.display = 'block';
    wrapper.classList.add('addBorder');
}

function selectItem(item) {
    select.textContent = item.textContent;
    selectHeader.style.display = 'flex';
    selectBody.style.display = 'none';
    wrapper.classList.remove('addBorder');

}

function cursorLeaveWrapper() {
    selectHeader.style.display = 'flex';
    selectBody.style.display = 'none';
    wrapper.classList.remove('addBorder');
}


