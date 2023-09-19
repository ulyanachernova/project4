// const sliderLine = document.querySelector('.slider-line'),
//     sliderTextLine = document.querySelectorAll('.slider-text-line'),
//     headerCity = document.querySelectorAll('.second-page-link-botton'),
//     arrowRight = document.querySelector('.one-arrow-right'),
//     arrowLeft = document.querySelector('.one-arrow-left'),
//     dots = document.querySelectorAll(".point");

let offsetPicLine = 0, // смещение от левого края фото
    offsetTextInfo = 0, // смещение от левого края инфо
    dotIndex = 0;

// Functions

export const nextSlide = () => {
    if (offsetPicLine < ((dots.length-1) * 679)) {
        offsetPicLine += 679;
        offsetTextInfo += 161;
        dotIndex++
    } else {
        offsetPicLine = 0;
        offsetTextInfo = 0;
        dotIndex = 0
    }
    sliderLine.style.left = -offsetPicLine + 'px'
    sliderTextLine.forEach(function(item){
        item.style.left = -offsetTextInfo + 'px'
    })
    thisSlide(dotIndex)
}

export const prevSlide = () => {
    if (offsetPicLine > 0) {
        offsetPicLine -= 679;
        offsetTextInfo -= 161;
        dotIndex--
    } else {
        offsetPicLine = (dots.length-1) * 679;
        offsetTextInfo = (dots.length-1) * 161;
        dotIndex = (dots.length-1)
    }
    sliderLine.style.left = -offsetPicLine + 'px'
    sliderTextLine.forEach(function(item){
        item.style.left = -offsetTextInfo + 'px'
    })
    thisSlide(dotIndex)
}

export const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active-point');
    }
    dots[index].classList.add('active-point');
    // for (let header of headerCity) {
    //     header.classList.remove('active-link')
    // }
    // headerCity[index].classList.add('active-link')
}

// EventListeners

arrowRight.addEventListener('click', nextSlide)
arrowLeft.addEventListener('click', prevSlide)

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        offsetPicLine = 679 * index;
        offsetTextInfo = 161 * index;
        sliderLine.style.left = -offsetPicLine + 'px'
        sliderTextLine.forEach(function(item){
            item.style.left = -offsetTextInfo + 'px'
        })
        dotIndex = index
        thisSlide(dotIndex)
    })
})

headerCity.forEach((header, index) => {
    header.addEventListener('click', () => {
        offsetPicLine = 679 * index;
        offsetTextInfo = 161 * index;
        sliderLine.style.left = -offsetPicLine + 'px'
        sliderTextLine.forEach(function(item){
            item.style.left = -offsetTextInfo + 'px'
        })
        dotIndex = index
        thisSlide(dotIndex)
    })
})