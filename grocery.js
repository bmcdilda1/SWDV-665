var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    Grocery.prototype.getTotalPrice = function () {
        return this.quantity * this.price;
    };
    return Grocery;
}());
// Create an array of grocery items 
var groceries = [
    new Grocery("Milk", 3, 5.00),
    new Grocery("Bread", 6, 3.00),
    new Grocery("Eggs", 11, 0.40),
    new Grocery("Cheese", 2, 9.00),
    new Grocery("Apples", 5, 1.20),
];
// Function to display groceries as HTML
function displayGroceries(groceries) {
    var groceryList = document.getElementById("grocery-list");
    if (!groceryList)
        return;
    groceries.forEach(function (grocery) {
        var listItem = document.createElement("li");
        listItem.textContent = grocery.name + " - Quantity: " + grocery.quantity + ", Price per unit: $" + grocery.price.toFixed(2) + ", Total Price: $" + grocery.getTotalPrice().toFixed(2);
        groceryList.appendChild(listItem);
    });
}
var startIndex = undefined;
var array = [1, 2, 3, 4, 5];
// Use logical OR to handle undefined values
for (var i = (startIndex || 0); i < array.length; i++) {
    console.log(array[i]);
}
// Call the function to display groceries
document.addEventListener("DOMContentLoaded", function () {
    displayGroceries(groceries);
});
