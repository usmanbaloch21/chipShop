const Chips = require("./Products/Chips.js");
const Pie = require("./Products/Pie.js");
const Basket = require("./Basket.js");
const numOfChipsInBasket = require("./helperFunctions/chipsCount");
const numOfPieInBasket = require("./helperFunctions/pieCount.js");


const chips = new Chips();
const chips2 = new Chips();
const pie = new Pie();
const basket = new Basket();

basket.addProduct(chips);
basket.addProduct(pie);
basket.addProduct(chips2);

console.log(basket.gettotalPrice);
console.log(basket.showProductsInBasket);

console.log("Testing the count function", numOfChipsInBasket(basket));
console.log("Testing the count function for pies", numOfPieInBasket(basket));

