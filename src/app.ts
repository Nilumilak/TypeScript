import Cart from "./Cart";
import Book from "./Book";
import Movie from "./Movie";

const cart = new Cart;
const book = new Book(1, 'book', 'author', 100, 15);
const movie = new Movie(2, 'movie', 150, 2012, 'country', 'slogan', ['genre1', 'genre2'], 100)

cart.add(book)
cart.add(movie)

console.log(cart.items)
console.log(cart.fullCost())
console.log(cart.costWithDiscount(50))
cart.remove(1)
console.log(cart.items)