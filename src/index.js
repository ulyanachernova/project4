import * as styles from "./base.css";
import * as data_books from  "./data-books";
import * as local_Storage_Util from "./localStorageUtil";

const sliderLine = document.querySelector('.slider-line'),
    dots = document.querySelectorAll(".point");

let offsetPicLine = 0, // смещение от левого края фото
    dotIndex = 0;

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active-point');
    }
    dots[index].classList.add('active-point');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        offsetPicLine = 1120 * index;
        sliderLine.style.left = -offsetPicLine + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
        makeTimer();
    })
});

let timer = 0;
makeTimer(); //Создаем интервал
function makeTimer(){
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function(){
        if (offsetPicLine < ((dots.length-1) * 679)) {
            offsetPicLine += 1120;
            dotIndex++
        } else {
            offsetPicLine = 0;
            dotIndex = 0
        }
        sliderLine.style.left = -offsetPicLine + 'px'
        thisSlide(dotIndex)
    },5000);
}






