// 4) 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


var store = "XYZ Clothing store";
var customerName = prompt("enter your name");
var productTitle = prompt("what to order");
var Quantity = prompt("quantity");

alert(customerName + "has ordered " + Quantity + productTitle + "(s) from " + store) 