document.addEventListener("DOMContentLoaded", function() {
    let burgerBtn = document.getElementsByClassName('burgerBtn')[0]
    let burgerWrapper = document.getElementsByClassName('menuBurger')[0]

    burgerBtn.addEventListener('click', () => {
        if (burgerWrapper.classList.contains('slideInRight')) {
            burgerWrapper.classList.remove('slideInRight')
            burgerWrapper.classList.add('slideInLeft')
            burgerBtn.style.transition = '.5s'
            burgerBtn.style.transform = 'rotate(180deg)'
        } else if (burgerWrapper.classList.contains('slideInLeft')) {
            burgerWrapper.classList.add('slideInRight')
            burgerBtn.style.transition = '.5s'
            burgerBtn.style.transform = 'rotate(0deg)'
        } else {
            burgerWrapper.classList.add('slideInLeft')
            burgerBtn.style.transition = '.5s'
            burgerBtn.style.transform = 'rotate(180deg)'
        }
    })


    cardSlider = document.querySelector(".card-slider");

    let clientX = null;
    let grabbing = false;
    let prevDistanceScrolled = null;
    let distanceToScroll;

    cardSlider.addEventListener("mousedown",(e) => {
        clientX = e.clientX;
        grabbing=true;
    })

    cardSlider.addEventListener("mouseup",() => {
        grabbing=false;
        prevDistanceScrolled += distanceToScroll;
    })

    cardSlider.addEventListener("mousemove",(e) => {
        if (grabbing) {
            let newClientX = e.clientX;
            distanceToScroll = newClientX - clientX;
            cardSlider.style.transform = `translateX(${distanceToScroll + prevDistanceScrolled}px)`
        }
    })


})
