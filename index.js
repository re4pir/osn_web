const btn = document.querySelector('.section-cost__button-text')
const items = document.querySelectorAll('.section-test')
const parent = document.querySelector('.section-promotions__context')

btn.addEventListener('click', () => {
    let elem = []
    items.forEach(item => {
        elem.push(item)
    });
})