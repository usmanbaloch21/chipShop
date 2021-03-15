const Pie = require("../Products/Pie.js");


const numOfPieInBasket = function(basket){
    let pieCount = 0;

    for (let i = 0; i < basket.products.length;i++){
        if (basket.products[i] instanceof Pie) {
            pieCount++
        }

    }
    return pieCount;
}

module.exports = numOfPieInBasket;