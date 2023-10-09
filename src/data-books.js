export let apiKey = "AIzaSyDx-mGbcsl9RXeb3RGdW-ed_GmKYGTWnM4",
            maxResult = 6;

export const buttons = document.querySelectorAll('.nav-link'),
            points = document.querySelectorAll(".nav-link-point"),
            output = document.querySelector(".output");


 export const sendRequest = (url, cb) => {
            fetch(url)
                .then(response => {
                    let resultResponse = response.json();
                    return resultResponse;
                })
                .then(data => {
                    if (cb) {
                        cb(data);
                    }
                })
                .catch( error => {
                    console.log(error.message);
                });
    }

  export const displayResult = (apiData) => {
     let cards = '';
      apiData.items.forEach(item => {
          const result = {
              image: function() {
                  let resultImage = '../images/placeholder.png';
                  if (item.volumeInfo.imageLinks) {
                      resultImage = item.volumeInfo.imageLinks.thumbnail;
                  } return resultImage;
              },
              authors: function () {
                  let resultAuthors = '';
                  if (item.volumeInfo.authors) {
                      resultAuthors = item.volumeInfo.authors;
                  } return resultAuthors;
              },

              title: item.volumeInfo.title,
              averageRating: function() {
                  let averageRating = '';
                  if (item.volumeInfo.averageRating) {
                  averageRating =`
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
              ratingsCount: function() {
                  let resultCount = '';
                  if (item.volumeInfo.ratingsCount) {
                      resultCount = `${item.volumeInfo.ratingsCount} review`
                  } return resultCount;
              },
              description: function() {
                  let resultDescription = '';
                  if (item.volumeInfo.description) {
                      resultDescription = item.volumeInfo.description;
                  } return resultDescription;
              },
              retailPrice: function() {
                  let resultPrice = '';
                  if (item.saleInfo.retailPrice) {
                      resultPrice = `$${(item.saleInfo.retailPrice.amount / 98.20).toFixed(2)}`;
                  } return resultPrice;
                  },
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
                    <p>${result.retailPrice()}</p>
                    <button class="button button-buy-now">BUY NOW</button>
                </div>
            </div>
        `;

            cards = cards  + cardBlock;
          });
      output.innerHTML = cards;
 }

 export const letResult = (maxResult) => {
     let activeBtn = document.querySelector(".active-nav-li");
     sendRequest(`https://www.googleapis.com/books/v1/volumes?q="subject:${activeBtn.textContent}"&key=${apiKey}&printType=books&startIndex=0&maxResults=${maxResult}&langRestrict=en`, displayResult);
 }

// fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${activeBtn.value}"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`)

document.addEventListener("DOMContentLoaded", () => {
        letResult(maxResult);
    //     const userSession = localStorage.getItem('isClick');
    //     if (userSession) {
    //         document.querySelector('.button-buy-now').classList.add('added');
    // }
});

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let activeBtn = document.querySelector(".active-nav-li");
        activeBtn.classList.remove('active-nav-li');
        btn.classList.add('active-nav-li');
        points.forEach((point) => {
            let activePoint = document.querySelector(".active-nav-point");
            activePoint.classList.remove('.active-nav-point');
            point.classList.add('.active-nav-point');
        });
        maxResult = 6;
        letResult(maxResult);
        });
});



if(maxResult) {
    let buttonLoadForAdd = `
        <button class="button button-load-more">LOAD MORE</button>
        `
    let blockShowMore = document.querySelector('.block-show-more');
    blockShowMore.innerHTML = buttonLoadForAdd;
    let buttonLoadMore = document.querySelector('.button-load-more');
    buttonLoadMore.addEventListener('click', () => {
        maxResult += 6;
        letResult(maxResult);
    })
    }

document.querySelector('.output').onclick = function(e) {
    if (!e.target.matches('.button-buy-now')) return;
    if (e.target.classList.contains('added')) {
        e.target.innerHTML = 'BUY NOW';
        e.target.classList.remove('added');
        localStorage.setItem('id_shipping_address_daneu','false');
    } else {
        e.target.classList.add('added');
        e.target.innerHTML = 'IN THE CART';
        localStorage.setItem('id_shipping_address_daneu','true');
    }
}

// function isActive() {
//     let isActive=localStorage.getItem('id_shipping_address_daneu');
//     let action=isActive==true?'addClass':'removeClass';
//     document.querySelector('.button-buy-now')[action]('added');
// }





