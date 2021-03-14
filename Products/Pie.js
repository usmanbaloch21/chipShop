

module.exports = class Pie {
    constructor() {
        this.price = 3.20;
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
