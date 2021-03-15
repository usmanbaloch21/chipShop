const constants = require("../Constants/constants.js");

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
        if(this.expiryDate.getUTCDate() < new Date().getUTCDate()){
            return true
           } else{
            return false
           }
    }
}
