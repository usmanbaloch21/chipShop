/* WELCOME TO THE CHIP SHOP JS DOESNT HAVE A MAIN METHOD SO I HAVE WRITTEN SOME CODE TO TEST THE VARIOUS FUNCTIONALITY
To Run make sure you have Node installed be in the directory and run npm i first to install the required node modules 
After that to start the program use command node index.js
*/
//Imports
const Chips = require("./Products/Chips.js");
const Pie = require("./Products/Pie.js");
const Basket = require("./Basket.js");

// defining a date
const date = new Date('March 15, 2021');

// initialising some instances of these objects note pie also takes date parameter for checking expiry
const chips = new Chips();
const chips2 = new Chips();
const pie = new Pie(date);
const basket = new Basket();

// adding some products into the basket as customer Buys

basket.addProduct(chips);
basket.addProduct(pie);
basket.addProduct(chips2);

// Can see total price of items in the basket
console.log("Total Price: $", basket.gettotalPrice);

// Can see products in basket
console.log(basket.showProductsInBasket);

// Can apply meal Deal discount if eligible
console.log("$",basket.applymealDealDiscount());

// Can apply pieExpiryDiscount if on the same day
console.log("$",basket.pieExpiryDiscount());

//Can see if pie is expired
console.log(pie.isExpired());


//Please feel free to play Around and test whatever else youd like 