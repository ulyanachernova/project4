import * as styles from "./base.css";
import * as data_books from "./js-modules/data-books";
import * as slider from "./js-modules/slider";
import {letResult, startIndex} from "./js-modules/data-books";
import {makeTimer} from "./js-modules/slider";

document.addEventListener("DOMContentLoaded", () => {
    letResult(startIndex);
});

makeTimer();


