export let apiKey = "AIzaSyDx-mGbcsl9RXeb3RGdW-ed_GmKYGTWnM4",
            maxResult = 6;

export const buttons = document.querySelectorAll('.nav-link'),
            points = document.querySelectorAll(".nav-link-point"),
            output = document.querySelector(".output"),
            loadMore = document.querySelector('.button-load-more');


 export const sendRequest = (url, cb) => {
     console.log(url)
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
                  let resultRating = '';
                  if (item.volumeInfo.averageRating) {
                      resultRating = item.volumeInfo.averageRating;
                  } return resultRating;
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
                    <div class="rating-block">
                        <p class='rating-block-result'>${result.averageRating()}</pclassrating-block-result>
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



      localStorage.setItem('pictures', cards);
 }

 export const letResult = (maxResult) => {
     let activeBtn = document.querySelector(".active-nav-li");
     sendRequest(`https://www.googleapis.com/books/v1/volumes?q="subject:${activeBtn.textContent}"&key=${apiKey}&printType=books&startIndex=0&maxResults=${maxResult}&langRestrict=en`, displayResult);
 }

// fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${activeBtn.value}"&key=${apiKey}&printType=books&startIndex=0&maxResults=6&langRestrict=en`)


document.addEventListener("DOMContentLoaded", () => {
        letResult(maxResult);
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

loadMore.addEventListener('click', () => {
    maxResult += 6;
    letResult(maxResult);
});

for (const output of document.querySelectorAll('.output')) {
    output.addEventListener('click', e => {
        if (!e.target.matches('.button-buy-now')) return;
        e.target.classList.add('added');

    })
}



