

module.exports = class Basket {
    constructor(){
        this.products = [];
        this.numOfProducts = this.products.length;
        this.totalPrice = 0;
    }
    addProduct(product){
        console.log(product, ": Added in Basket")
        this.products.push(product);
    }
    get gettotalPrice (){
        for(let i = 0; i < this.products.length; i++){
           this.totalPrice += this.products[i].price;
        }
      return this.totalPrice;
    }
    get showProductsInBasket(){
        console.log("..... Showing Products in Basket .....");
        return this.products;
    }
} 
