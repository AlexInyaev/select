
const options = document.querySelectorAll('.option'),
    select = document.querySelector('.select'),
    selectHeader = document.querySelector('.selectHeader'),
    selectBody = document.querySelector('.selectBody'),
    // scrollElem = document.querySelector('.scrollElem'),
    // wrapperScroll = document.querySelector('.wrapperScroll'),
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
    // wrapperScroll.style.display = 'block';
    wrapper.classList.add('addBorder');
}

function selectItem(item) {
    select.textContent = item.textContent;
    selectHeader.style.display = 'flex';
    selectBody.style.display = 'none';
    // wrapperScroll.style.display = 'none';
    wrapper.classList.remove('addBorder');

}

function cursorLeaveWrapper() {
    selectHeader.style.display = 'flex';
    selectBody.style.display = 'none';
    // wrapperScroll.style.display = 'none';
    wrapper.classList.remove('addBorder');
}


// 88888888888888888


// selectBody.addEventListener('scroll', function () {
//     // console.log(selectBody.scrollHeight);       //высота контента видимый + невидимый
//     // console.log(selectBody.clientHeight);       // высота области содержимого вместе с внутренними отступами padding, но без прокрутки
//     // console.log(selectBody.scrollTop);          // высота невидимой, прокрученной в данный момент, части элемента слева и сверху.
//     // console.log(Math.round(selectBody.scrollTop / ((selectBody.scrollHeight - selectBody.clientHeight) / 45)))
//     scrollElem.style.top = `${Math.round(selectBody.scrollTop / ((selectBody.scrollHeight - selectBody.clientHeight) / 45))}%` //расчет отступа ползунка от верха и добавление расчета в стили
//     // console.log(scrollElem.style.top)
// });

// scrollElem.onmousedown = (e) => {
//     console.log(e)
// }