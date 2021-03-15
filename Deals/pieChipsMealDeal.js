const numOfChipsInBasket = require("../helperFunctions/chipsCount.js");
const numOfPieInBasket = require("../helperFunctions/pieCount.js");
const math = require("mathjs");
const constants = require("../Constants/constants.js");


const pieChipsMealDeal = function(basket) {
    if (basket.products.length === 0){
        return new Error("Basket Is Empty Cannot Apply Meal Deal Discount")
    }

    const numOfPies = numOfPieInBasket(basket);
    const numOfChips = numOfChipsInBasket(basket);
    let discountValue = 0;

    const numTotalDiscount = math.min(numOfPies,numOfChips);

    for(let i = 0; i < numTotalDiscount; i++){
        discountValue += (constants.chipsPrice + constants.piePrice) *  (constants.pieChipsDiscount);
    }
    return discountValue;
} 

module.exports = pieChipsMealDeal;

