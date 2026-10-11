/*
Contains general functional logic for codebase



*/

import { addItem } from "./ordermanagement.js";


document.getElementById("addOrderTest").addEventListener("click", () => {
    addItem("Big balls", 2, "AGHHHHHHHHHHHHHH")
    document.getElementById("cartCount").textContent = cart.orders.length;
});

document.getElementById("btn").addEventListener("click", () => {
    alert("Working");
})