const Chips = require("./Products/Chips.js");
const Pie = require("./Products/Pie.js");
const Basket = require("./Basket.js");


const chips = new Chips();
const chips2 = new Chips();
const pie = new Pie();
const basket = new Basket();

basket.addProduct(chips);
basket.addProduct(pie);
basket.addProduct(chips2);

console.log("Total Price: ", basket.gettotalPrice);
console.log(basket.showProductsInBasket);

console.log("Apply Meal Deal Discount Price,", basket.applymealDealDiscount());
