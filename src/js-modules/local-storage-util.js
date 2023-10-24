let numberOfBooks = document.querySelector(".number-of-books");

class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName,JSON.stringify(products));

        return { pushProduct, products };
    }

    numbersInCard() {
        let productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            let sum = (JSON.parse(productsLocalStorage)).length;
            localStorage.setItem('items-in-cart', `${sum}`);
            if (sum > 0) {
                numberOfBooks.classList.remove('not-visible');
                numberOfBooks.innerHTML = sum;
            } else {
                numberOfBooks.classList.add('not-visible');
            }
        }
    }
}

export const localStorageUtil = new LocalStorageUtil();

