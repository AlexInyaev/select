
let options = document.querySelectorAll('.option');
let select = document.querySelector('.select');
select.onclick = openList;
// let index = 1;


options.forEach(item => {
    item.onclick = selectItem;
})
// function toggle() {
//     if (index % 2 === 0) {
//         options.forEach(item => {
//             item.classList.add('hide')
//         })
//     } else {
//         options.forEach(item => {
//             item.classList.remove('hide')
//         })
//     }

//     index++;

// }

function openList() {
    console.log('work')
    options.forEach(item => {
        item.classList.remove('hide')
    })
}

function selectItem() {
    options.forEach(item => {
        item.classList.add('hide')
    })
}