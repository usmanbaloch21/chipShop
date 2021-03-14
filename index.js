const Chips = require("./Products/Chips.js");
const Pie = require("./Products/Pie.js");
const Basket = require("./Basket.js");


const chips = new Chips();
const pie = new Pie();
const basket = new Basket();

basket.addProduct(pie);
basket.addProduct(chips);

console.log(basket.gettotalPrice());

