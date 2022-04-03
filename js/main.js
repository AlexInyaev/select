
const options = document.querySelectorAll('.option'),
    select = document.querySelector('.select'),
    selectHeader = document.querySelector('.selectHeader'),
    selectBody = document.querySelector('.selectBody'),
    body = document.querySelector('body'),
    // wrapperScroll = document.querySelector('.wrapperScroll'),
    wrapper = document.querySelector('.wrapper');


// ********************************************** clickOutWrapper ***************************************
selectHeader.onclick = (e) => {
    e.stopPropagation();
    openList();
};

document.addEventListener('click', (e) => {
    const target = e.target;
    const its_menu = target == selectBody || selectBody.contains(target); //если виден selectBody
    const its_btnMenu = target == selectHeader;
    const menu_is_active = (selectBody.style.display == 'block')

    if (!its_menu && !its_btnMenu && menu_is_active) {
        clickOutWrapper();
    }
});
// ********************************************** clickOutWrapper ***************************************




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

function clickOutWrapper() {
    selectHeader.style.display = 'flex';
    selectBody.style.display = 'none';
    wrapper.classList.remove('addBorder');
}