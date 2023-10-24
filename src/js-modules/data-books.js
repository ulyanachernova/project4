import {localStorageUtil} from "./local-storage-util";

export let startIndex = 0,
            cards = '',
            buttonLoadMore = document.querySelector('.button-load-more');

export const apiKey = "AIzaSyDx-mGbcsl9RXeb3RGdW-ed_GmKYGTWnM4",
            points = document.querySelectorAll(".nav-link-point"),
            output = document.querySelector(".output");

export function letResult (startIndex) {
    let activeBtn = document.querySelector(".active-nav-li");
    sendRequest(`https://www.googleapis.com/books/v1/volumes?q="subject:${activeBtn.textContent}"&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`, displayResult);
}

export function sendRequest (url, cb) {
            fetch(url)
                .then(response => {
                    let resultResponse = response.json();
                    return resultResponse;
                })
                .then(data => {
                    if (cb) { cb(data) }
                })
                .catch(error => console.log(error.message));
    }

export function displayResult (apiData) {
    localStorageUtil.numbersInCard()
    buttonLoadMore.classList.add('not-visible');
     if (apiData.items) {
         apiData.items.forEach(item => {
             const result = {
                 image: function () {
                     let resultImage = '../images/placeholder.png';
                     if (item.volumeInfo.imageLinks) {
                         resultImage = item.volumeInfo.imageLinks.thumbnail;
                     }
                     return resultImage;
                 },
                 authors: function () {
                     let resultAuthors = '';
                     if (item.volumeInfo.authors) {
                         resultAuthors = item.volumeInfo.authors;
                     }
                     return resultAuthors;
                 },

                 title: item.volumeInfo.title,
                 averageRating: function () {
                     let averageRating = '';
                     if (item.volumeInfo.averageRating) {
                         averageRating = `
                    <div class="rating__body">
                          <div class="rating__active" style="width:${item.volumeInfo.averageRating / 0.05}%"></div>
                          <div class="rating__items">
                              <input type="radio" class="rating__item" value="1" name="rating">
                               <input type="radio" class="rating__item" value="2" name="rating">
                               <input type="radio" class="rating__item" value="3" name="rating">
                               <input type="radio" class="rating__item" value="4" name="rating">
                               <input type="radio" class="rating__item" value="5" name="rating">
                          </div>
                    </div>`
                     }
                     return averageRating;
                 },
                 ratingsCount: function () {
                     let resultCount = '';
                     if (item.volumeInfo.ratingsCount) {
                         resultCount = `${item.volumeInfo.ratingsCount} review`
                     }
                     return resultCount;
                 },
                 description: function () {
                     let resultDescription = '';
                     if (item.volumeInfo.description) {
                         resultDescription = item.volumeInfo.description;
                     }
                     return resultDescription;
                 },
                 retailPrice: function () {
                     let resultPrice = '';
                     if (item.saleInfo.retailPrice) {
                         resultPrice = `$${(item.saleInfo.retailPrice.amount / 98.20).toFixed(2)}`;
                     }
                     return resultPrice;
                 },
                 added: function () {
                     let add = '';
                     let text = '';
                     let id = item.id;
                     const productStore = localStorageUtil.getProducts();
                     if (productStore.indexOf(id) === -1) {
                         text = 'BUY NOW';
                     } else {
                         add = 'added';
                         text = 'IN THE CART';
                     }
                     return `${add}" id='${id}'>${text}`;
                 }
             }
             const cardBlock = `
            <div class="card">
                <div class="card-image">
                    <img src="${result.image()}" alt='img'>
                </div>
                <div class="card-info">          
                    <p class="card-info-authors">${result.authors()}</p>
                    <p class="card-info-title">${result.title}</p>
                    <div class="rating">
                        ${result.averageRating()}
                        <p class="rating-block-result">&nbsp;${result.ratingsCount()}</p>
                    </div>
                    <p class="card-block-description">${result.description()}</p>
                    <p class="retain-price">${result.retailPrice()}</p>
                    <button class="button button-buy-now ${result.added()}</button>
                </div>
            </div>
        `;
             cards = cards + cardBlock;
         });
         output.innerHTML = cards;
         buttonLoadMore.classList.remove('not-visible');
     }
 }

document.addEventListener("DOMContentLoaded", () => {
    letResult(startIndex);
});

window.addEventListener('click', function (e) {
    if (e.target.closest('.nav-link')) {
        cards = '';
        let activeBtn = document.querySelector(".active-nav-li");
        activeBtn.classList.remove('active-nav-li');
        e.target.closest('.nav-link').classList.add('active-nav-li');
        points.forEach((point) => {
            let activePoint = document.querySelector(".active-nav-point");
            activePoint.classList.remove('.active-nav-point');
            point.classList.add('.active-nav-point');
        });
        let startIndex = 0;
        letResult(startIndex);
    } else if (e.target.matches('.button-load-more')) {
        cards = document.querySelector('.output').innerHTML;
        startIndex += 6;
        letResult(startIndex);
    }
})

document.querySelector('.output').onclick = function(e) {
    if (!e.target.matches('.button-buy-now')) return;
    if (e.target.classList.contains('added')) {
        e.target.innerHTML = 'BUY NOW';
        e.target.classList.remove('added');
    } else {
        e.target.classList.add('added');
        e.target.innerHTML = 'IN THE CART';
    }
    let id = e.target.id;
    localStorageUtil.putProducts(id);
    localStorageUtil.numbersInCard();
}


