const Pie = require("../Products/Pie.js");
const currentDate = new Date();
const constants = require("../Constants/constants.js");

const pieExpiryDeal = function(basket) {
    if (basket.products.length === 0){
        return new Error("Basket Is Empty Cannot Apply Expiry Discount")
    }

    let discountValue = 0;

    for (let i = 0; i < basket.products.length; i++){
        if (basket.products[i] instanceof Pie && basket.product[i].expiryDate == currentDate.now().getUTCDate()){
            discountValue += constants.piePrice * constants.pieExpiryDiscount;
        }
    }    
    return discountValue;
}

module.exports = pieExpiryDeal;