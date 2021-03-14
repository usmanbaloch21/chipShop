const constants = require("../Constants/constants.js");

 module.exports = class Chips {
    constructor() {
        this.price = constants.chipsPrice;
    }

    get getPrice(){
        return this.price;
    }
}

