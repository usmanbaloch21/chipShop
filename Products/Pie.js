const constants = require("../Constants/constants.js");
const expiryChecker = require("../helperFunctions/expiryChecker.js");

module.exports = class Pie {
    constructor(date) {
        this.price = constants.piePrice;
        this.expiryDate = date;
    }
    get getPrice() {
        return this.price;
    }

    get getExpiryDate(){
        return this.expiryDate;
    }
    isExpired(){
        return expiryChecker(this);
    }
}
