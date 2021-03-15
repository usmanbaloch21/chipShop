const Chips = require("../Products/Chips");


const numOfChipsInBasket = function(basket){
    let chipsCount = 0;

    for (let i = 0; i < basket.products.length;i++){
        
        if (basket.products[i] instanceof Chips) {
            console.log("Counting Chipies");
            chipsCount++;
        }

    }
    return chipsCount;
}

module.exports = numOfChipsInBasket;