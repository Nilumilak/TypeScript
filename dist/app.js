"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("./Cart");
var Book_1 = require("./Book");
var Movie_1 = require("./Movie");
var cart = new Cart_1.default;
var book = new Book_1.default(1, 'book', 'author', 100, 15);
var movie = new Movie_1.default(2, 'movie', 150, 2012, 'country', 'slogan', ['genre1', 'genre2'], 100);
cart.add(book);
cart.add(movie);
console.log(cart.items);
console.log(cart.fullCost());
console.log(cart.costWithDiscount(50));
cart.remove(1);
console.log(cart.items);
//# sourceMappingURL=app.js.map