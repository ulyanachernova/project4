/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/base.css":(e,t,n)=>{n.r(t)},"./src/data-books.js":(e,t,n)=>{n.r(t),n.d(t,{apiKey:()=>o,buttons:()=>r,displayResult:()=>c,letResult:()=>i,output:()=>l,points:()=>s,sendRequest:()=>a});const o="AIzaSyDx-mGbcsl9RXeb3RGdW-ed_GmKYGTWnM4",r=document.querySelectorAll(".nav-link"),s=document.querySelectorAll(".nav-link-point"),l=document.querySelector(".output"),a=(e,t)=>{console.log(e),fetch(e).then((e=>e.json())).then((e=>{t&&t(e)})).catch((e=>{console.log(e.message)}))},c=e=>{let t="";e.items.forEach((e=>{const n=function(){let t="../images/placeholder.png";return e.volumeInfo.imageLinks&&(t=e.volumeInfo.imageLinks.thumbnail),t},o=function(){let t="";return e.volumeInfo.authors&&(t=e.volumeInfo.authors),t},r=e.volumeInfo.title,s=function(){let t="";return e.volumeInfo.averageRating&&(t=e.volumeInfo.averageRating),t},l=function(){let t="";return e.volumeInfo.ratingsCount&&(t=`${e.volumeInfo.ratingsCount} review`),t},a=function(){let t="";return e.volumeInfo.description&&(t=e.volumeInfo.description),t},c=function(){let t="";return e.saleInfo.retailPrice&&(t=`$${(e.saleInfo.retailPrice.amount/98.2).toFixed(2)}`),t},i=`\n            <div class="card">\n                <div class="card-image">\n                    <img src="${n()}">\n                </div>\n                <div class="card-info">          \n                    <p class="card-info-authors">${o()}</p>\n                    <p class="card-info-title">${r}</p>\n                    <div class="rating-block">\n                        <p class='rating-block-result'>${s()}</pclassrating-block-result>\n                        <p class="rating-block-result">&nbsp;${l()}</p>\n                    </div>\n                    <p class="card-block-description">${a()}</p>\n                    <p>${c()}</p>\n                    <button class="button button-buy-now">BUY NOW</button>\n                </div>\n            </div>\n        `;t+=i})),l.innerHTML=t,localStorage.setItem("pictures",t)},i=()=>{let e=document.querySelector(".active-nav-li");document.querySelector(".active-nav-point");a(`https://www.googleapis.com/books/v1/volumes?q="subject:${e.textContent}"&key=${o}&printType=books&startIndex=0&maxResults=6&langRestrict=en`,c)};document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".active-nav-li");i()})),r.forEach(((e,t)=>{e.addEventListener("click",(()=>{document.querySelector(".active-nav-li").classList.remove("active-nav-li"),e.classList.add("active-nav-li"),s.forEach(((e,t)=>{document.querySelector(".active-nav-point").classList.remove(".active-nav-point"),e.classList.add(".active-nav-point")})),i()}))}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o);n("./src/base.css"),n("./src/data-books.js");const e=document.querySelector(".slider-line"),t=document.querySelectorAll(".point");let r=0,s=0;const l=e=>{for(let e of t)e.classList.remove("active-point");t[e].classList.add("active-point")};t.forEach(((t,n)=>{t.addEventListener("click",(()=>{r=1120*n,e.style.left=-r+"px",s=n,l(s),c()}))}));let a=0;function c(){clearInterval(a),a=setInterval((function(){r<679*(t.length-1)?(r+=1120,s++):(r=0,s=0),e.style.left=-r+"px",l(s)}),5e3)}c()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vcHJvamVjdDQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdDQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Q0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdDQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0NC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNvbnN0IGFwaUtleSA9IFwiQUl6YVN5RHgtbUdiY3NsOVJYZWIzUkdkVy1lZF9HbUtZR1RXbk00XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKTtcclxuZXhwb3J0IGNvbnN0IHBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmstcG9pbnRcIik7XHJcbmV4cG9ydCBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcclxuXHJcbiBleHBvcnQgY29uc3Qgc2VuZFJlcXVlc3QgPSAodXJsLCBjYikgPT4ge1xyXG4gICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICAgICAgZmV0Y2godXJsKVxyXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPVwic3ViamVjdDpBcmNoaXRlY3R1cmVcIiZrZXk9QUl6YVN5RHgtbUdiY3NsOVJYZWIzUkdkVy1lZF9HbUtZR1RXbk00JnByaW50VHlwZT1ib29rcyZzdGFydEluZGV4PTAmbWF4UmVzdWx0cz02JmxhbmdSZXN0cmljdD1lblxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgZXhwb3J0IGNvbnN0IGRpc3BsYXlSZXN1bHQgPSAoYXBpRGF0YSkgPT4ge1xyXG4gICAgIGxldCBjYXJkcyA9ICcnO1xyXG4gICAgIC8vIGNvbnNvbGUubG9nKGFwaURhdGEuaXRlbXMpO1xyXG4gICAgICBhcGlEYXRhLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgaW1hZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0SW1hZ2UgPSAnLi4vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnZvbHVtZUluZm8uaW1hZ2VMaW5rcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0SW1hZ2UgPSBpdGVtLnZvbHVtZUluZm8uaW1hZ2VMaW5rcy50aHVtYm5haWw7XHJcbiAgICAgICAgICAgICAgICAgIH0gcmV0dXJuIHJlc3VsdEltYWdlO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYXV0aG9yczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0QXV0aG9ycyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS52b2x1bWVJbmZvLmF1dGhvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEF1dGhvcnMgPSBpdGVtLnZvbHVtZUluZm8uYXV0aG9ycztcclxuICAgICAgICAgICAgICAgICAgfSByZXR1cm4gcmVzdWx0QXV0aG9ycztcclxuICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS52b2x1bWVJbmZvLnRpdGxlLFxyXG4gICAgICAgICAgICAgIGF2ZXJhZ2VSYXRpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0UmF0aW5nID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnZvbHVtZUluZm8uYXZlcmFnZVJhdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UmF0aW5nID0gaXRlbS52b2x1bWVJbmZvLmF2ZXJhZ2VSYXRpbmc7XHJcbiAgICAgICAgICAgICAgICAgIH0gcmV0dXJuIHJlc3VsdFJhdGluZztcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHJhdGluZ3NDb3VudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRDb3VudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS52b2x1bWVJbmZvLnJhdGluZ3NDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Q291bnQgPSBgJHtpdGVtLnZvbHVtZUluZm8ucmF0aW5nc0NvdW50fSByZXZpZXdgXHJcbiAgICAgICAgICAgICAgICAgIH0gcmV0dXJuIHJlc3VsdENvdW50O1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0RGVzY3JpcHRpb24gPSAnJztcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udm9sdW1lSW5mby5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0RGVzY3JpcHRpb24gPSBpdGVtLnZvbHVtZUluZm8uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgIH0gcmV0dXJuIHJlc3VsdERlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcmV0YWlsUHJpY2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0UHJpY2UgPSAnJztcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc2FsZUluZm8ucmV0YWlsUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFByaWNlID0gYCQkeyhpdGVtLnNhbGVJbmZvLnJldGFpbFByaWNlLmFtb3VudCAvIDk4LjIwKS50b0ZpeGVkKDIpfWA7XHJcbiAgICAgICAgICAgICAgICAgIH0gcmV0dXJuIHJlc3VsdFByaWNlO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBjb25zdCBjYXJkQmxvY2sgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXN1bHQuaW1hZ2UoKX1cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtaW5mby1hdXRob3JzXCI+JHtyZXN1bHQuYXV0aG9ycygpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtaW5mby10aXRsZVwiPiR7cmVzdWx0LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdyYXRpbmctYmxvY2stcmVzdWx0Jz4ke3Jlc3VsdC5hdmVyYWdlUmF0aW5nKCl9PC9wY2xhc3NyYXRpbmctYmxvY2stcmVzdWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInJhdGluZy1ibG9jay1yZXN1bHRcIj4mbmJzcDske3Jlc3VsdC5yYXRpbmdzQ291bnQoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWJsb2NrLWRlc2NyaXB0aW9uXCI+JHtyZXN1bHQuZGVzY3JpcHRpb24oKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXN1bHQucmV0YWlsUHJpY2UoKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tYnV5LW5vd1wiPkJVWSBOT1c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgICAgICBjYXJkcyA9IGNhcmRzICArIGNhcmRCbG9jaztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBvdXRwdXQuaW5uZXJIVE1MID0gY2FyZHM7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwaWN0dXJlcycsIGNhcmRzKTtcclxuIH1cclxuXHJcbiBleHBvcnQgY29uc3QgbGV0UmVzdWx0ID0gKCkgPT4ge1xyXG4gICAgIGxldCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1uYXYtbGlcIik7XHJcbiAgICAgbGV0IGFjdGl2ZVBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1uYXYtcG9pbnQnKTtcclxuICAgICBzZW5kUmVxdWVzdChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPVwic3ViamVjdDoke2FjdGl2ZUJ0bi50ZXh0Q29udGVudH1cIiZrZXk9JHthcGlLZXl9JnByaW50VHlwZT1ib29rcyZzdGFydEluZGV4PTAmbWF4UmVzdWx0cz02JmxhbmdSZXN0cmljdD1lbmAsIGRpc3BsYXlSZXN1bHQpO1xyXG4gfVxyXG5cclxuLy8gZmV0Y2goYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1cInN1YmplY3Q6JHthY3RpdmVCdG4udmFsdWV9XCIma2V5PSR7YXBpS2V5fSZwcmludFR5cGU9Ym9va3Mmc3RhcnRJbmRleD0wJm1heFJlc3VsdHM9NiZsYW5nUmVzdHJpY3Q9ZW5gKVxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGxldCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1uYXYtbGlcIik7XHJcbiAgICAgICAgbGV0UmVzdWx0KCk7XHJcbn1cclxuICAgICk7XHJcblxyXG5idXR0b25zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgYWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtbmF2LWxpXCIpO1xyXG4gICAgICAgIGFjdGl2ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbmF2LWxpJyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1uYXYtbGknKTtcclxuICAgICAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLW5hdi1wb2ludFwiKTtcclxuICAgICAgICAgICAgYWN0aXZlUG9pbnQuY2xhc3NMaXN0LnJlbW92ZSgnLmFjdGl2ZS1uYXYtcG9pbnQnKTtcclxuICAgICAgICAgICAgcG9pbnQuY2xhc3NMaXN0LmFkZCgnLmFjdGl2ZS1uYXYtcG9pbnQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXRSZXN1bHQoKTtcclxuICAgICAgICB9KTtcclxufSk7XHJcblxyXG4vLyBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XHJcbi8vICAgICBwb2ludC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy9cclxuLy8gICAgICAgICBsZXRSZXN1bHQoKTtcclxuLy8gICAgIH0pO1xyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9iYXNlLmNzcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBkYXRhYm9va3MgZnJvbSAnLi9kYXRhLWJvb2tzJztcclxuXHJcbmNvbnN0IHNsaWRlckxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWxpbmUnKSxcclxuICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvaW50XCIpO1xyXG5cclxubGV0IG9mZnNldFBpY0xpbmUgPSAwLCAvLyDRgdC80LXRidC10L3QuNC1INC+0YIg0LvQtdCy0L7Qs9C+INC60YDQsNGPINGE0L7RgtC+XHJcbiAgICBkb3RJbmRleCA9IDA7XHJcblxyXG5jb25zdCB0aGlzU2xpZGUgPSAoaW5kZXgpID0+IHtcclxuICAgIGZvciAobGV0IGRvdCBvZiBkb3RzKSB7XHJcbiAgICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wb2ludCcpO1xyXG4gICAgfVxyXG4gICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXBvaW50Jyk7XHJcbn1cclxuXHJcbmRvdHMuZm9yRWFjaCgoZG90LCBpbmRleCkgPT4ge1xyXG4gICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG9mZnNldFBpY0xpbmUgPSAxMTIwICogaW5kZXg7XHJcbiAgICAgICAgc2xpZGVyTGluZS5zdHlsZS5sZWZ0ID0gLW9mZnNldFBpY0xpbmUgKyAncHgnO1xyXG4gICAgICAgIGRvdEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpc1NsaWRlKGRvdEluZGV4KTtcclxuICAgICAgICBtYWtlVGltZXIoKTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxubGV0IHRpbWVyID0gMDtcclxubWFrZVRpbWVyKCk7IC8v0KHQvtC30LTQsNC10Lwg0LjQvdGC0LXRgNCy0LDQu1xyXG5mdW5jdGlvbiBtYWtlVGltZXIoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpIC8v0J7Rh9C40YHRgtC40Lwg0LjQvdGC0LXRgNCy0LDQuywg0Y3RgtC+INC/0L7Qt9Cy0L7Qu9C40YIg0L/RgNC10YDQstCw0YLRjCDQtdCz0L4g0YDQsNCx0L7RgtGDINC4INC+0YLQvNC10L3QuNGC0Ywg0L/QtdGA0LXQu9C40YHRgtGL0LLQsNC90LjQtVxyXG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmIChvZmZzZXRQaWNMaW5lIDwgKChkb3RzLmxlbmd0aC0xKSAqIDY3OSkpIHtcclxuICAgICAgICAgICAgb2Zmc2V0UGljTGluZSArPSAxMTIwO1xyXG4gICAgICAgICAgICBkb3RJbmRleCsrXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2Zmc2V0UGljTGluZSA9IDA7XHJcbiAgICAgICAgICAgIGRvdEluZGV4ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXJMaW5lLnN0eWxlLmxlZnQgPSAtb2Zmc2V0UGljTGluZSArICdweCdcclxuICAgICAgICB0aGlzU2xpZGUoZG90SW5kZXgpXHJcbiAgICB9LDUwMDApO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJhcGlLZXkiLCJidXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9pbnRzIiwib3V0cHV0IiwicXVlcnlTZWxlY3RvciIsInNlbmRSZXF1ZXN0IiwidXJsIiwiY2IiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGlzcGxheVJlc3VsdCIsImFwaURhdGEiLCJjYXJkcyIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJyZXN1bHQiLCJyZXN1bHRJbWFnZSIsInZvbHVtZUluZm8iLCJpbWFnZUxpbmtzIiwidGh1bWJuYWlsIiwicmVzdWx0QXV0aG9ycyIsImF1dGhvcnMiLCJ0aXRsZSIsInJlc3VsdFJhdGluZyIsImF2ZXJhZ2VSYXRpbmciLCJyZXN1bHRDb3VudCIsInJhdGluZ3NDb3VudCIsInJlc3VsdERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJyZXN1bHRQcmljZSIsInNhbGVJbmZvIiwicmV0YWlsUHJpY2UiLCJhbW91bnQiLCJ0b0ZpeGVkIiwiY2FyZEJsb2NrIiwiaW5uZXJIVE1MIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImxldFJlc3VsdCIsImFjdGl2ZUJ0biIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ0biIsImluZGV4IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicG9pbnQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInNsaWRlckxpbmUiLCJkb3RzIiwib2Zmc2V0UGljTGluZSIsImRvdEluZGV4IiwidGhpc1NsaWRlIiwiZG90Iiwic3R5bGUiLCJsZWZ0IiwibWFrZVRpbWVyIiwidGltZXIiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9