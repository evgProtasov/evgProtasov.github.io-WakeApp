const popUp = document.querySelector('.popup')
const xMark = document.querySelector('.popup-close')
const body = document.querySelector('body')
const navList = document.querySelectorAll('.nav-item')

function showPopup() {
    popUp.classList.remove('none')
}

xMark.addEventListener('click', () => {
    popUp.classList.add('none')
})


setTimeout(showPopup, 8000)

navList.forEach(item => {
    item.addEventListener('click', function() {
        navList.forEach(elem => elem.classList.remove('item-active'));
      this.classList.add('item-active');
    });
});
