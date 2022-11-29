const slider = document.querySelector('.section-cost__slider')

const btns = document.querySelectorAll('section-cost__kits-kit')

btns.forEach(btn => {
    btn.addEventListener('click', event => {
        if (btn.id === '1') {
            slider.value = 0
        } else if (btn.id === '2') {
            slider.value = 50
        } else {
            slider.value = 100
        }    
    })
})