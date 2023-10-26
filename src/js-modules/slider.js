export const sliderLine = document.querySelector('.slider-line'),
    dots = document.querySelectorAll(".point");

export let offsetPicLine = 0, // смещение от левого края фото
    dotIndex = 0;

export function thisSlide (index) {
    for (let dot of dots) {
        dot.classList.remove('active-point');
    }
    dots[index].classList.add('active-point');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        let slideWidth = document.querySelector('.slider-line img').clientWidth;
        offsetPicLine = slideWidth  * index;
        sliderLine.style.left = -offsetPicLine + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
        makeTimer();
    })
});

let timer = 0;
 //Создаем интервал
export function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
        let slideWidth = document.querySelector('.slider-line img').clientWidth;
        if (offsetPicLine < ((dots.length-1) * slideWidth)) {
            offsetPicLine += slideWidth;
            dotIndex++
        } else {
            offsetPicLine = 0;
            dotIndex = 0
        }
        sliderLine.style.left = -offsetPicLine + 'px'
        thisSlide(dotIndex)
    },5000);
}