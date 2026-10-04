/*
Contains classes for managing orders and products


*/


// this class stores data for each different product sold
/*
name
description
picture of object
price
average time to complete

*/
export class Product {
    constructor(name, description, image, price, time){
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.time = time;
    }
}



// This class stores data for a specific order
/*
product
quantity
total price
special notes
*/
export class Order {
    constructor(product, quantity, notes){
        this.product = product;
        this.quantity = quantity;
        this.notes = notes;
        
        this.totalPrice = product.price * quantity;
    }

}



// stores cart data
/*
name
orders
total price
*/
export class Cart {
    constructor(name, orders){
        this.name = name;
        this.orders = orders;

        // finds the total sum price of the cart
        sum = 0;
        for (var order in orders){
            sum += order.totalPrice;
        }

        this.totalPrice = sum;
    }
}

export const cart = new Cart("No Name", []);
