// stores the object instances of different sold product types

// imports relevant classes.
import { Product } from "javascript/ordermanagement.js";





// stores the available products that can be purchased. This cannot be changed during run time so is a constant.
/*
name
description
picture of object
price
average time to complete
*/
export const products = [
    new Product("Sword", "A steel blade forged by Gunter's trusty hand! Guarentied claw-sharp edge or your money back!", "images/sword.png", 10, 8),
    new Product("Plate Armor", "Strong, solid, expertly forged interlocking plates for the expert adventurer! What you lose in weight, you gain in nigh invincability.", "images/platearmor.png", 50, 15),
    new Product("Chain Mail", "For the adventurer who needs a little more flexibility in their armor, chain mail is for you! Each loop is crafted and affixed with love.", "images/chainmail.png", 25, 20),
    new Product("Cooking Pot", "Simple, no nonsense cooking pot. If you're in the need of a new trusty pot, Gunter has got you covered.", "images/cookingpot.png", 3, 5)
];
