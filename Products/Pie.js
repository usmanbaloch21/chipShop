const constants = require("../Constants/constants.js");

module.exports = class Pie {
    constructor() {
        this.price = constants.piePrice;
        this.expiryDate;
    }
    get getPrice() {
        return this.price;
    }

    get getExpiryDate(){
        return this.expiryDate;
    }
    /**
     * @param {any} date
     */
    set setExpiryDate(date){
        this.expiryDate = date;
    }
}
