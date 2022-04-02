
const options = document.querySelectorAll('.option'),
    select = document.querySelector('.select'),
    selectHeader = document.querySelector('.selectHeader'),
    selectBody = document.querySelector('.selectBody'),
    selectRightProgress = document.querySelector('.selectRightProgress'),
    wrapper = document.querySelector('.wrapper');

selectHeader.onclick = openList;



options.forEach(item => {
    item.onclick = () => selectItem(item);
})


function openList() {

    selectHeader.style.display = 'none';
    selectBody.style.display = 'block';
    selectRightProgress.style.display = 'block';
    wrapper.classList.add('addBorder');
}

function selectItem(item) {
    console.log(item.textContent)
    select.textContent = item.textContent;
    selectHeader.style.display = 'flex';
    selectBody.style.display = 'none';
    selectRightProgress.style.display = 'none';
    wrapper.classList.remove('addBorder');


}
