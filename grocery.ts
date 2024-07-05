class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    getTotalPrice(): number {
        return this.quantity * this.price;
    }
}

// Create an array of grocery items 
const groceries: Grocery[] = [
    new Grocery("Milk", 3, 5.00),  
    new Grocery("Bread", 6, 3.00),  
    new Grocery("Eggs", 11, 0.40),  
    new Grocery("Cheese", 2, 9.00), 
    new Grocery("Apples", 5, 1.20), 
];

// Function to display groceries as HTML
function displayGroceries(groceries: Grocery[]): void {
    const groceryList = document.getElementById("grocery-list");
    if (!groceryList) return;

    groceries.forEach(grocery => {
        const listItem = document.createElement("li");
        listItem.textContent = `${grocery.name} - Quantity: ${grocery.quantity}, Price per unit: $${grocery.price.toFixed(2)}, Total Price: $${grocery.getTotalPrice().toFixed(2)}`;
        groceryList.appendChild(listItem);
    });
}


let startIndex: number | undefined = undefined;
let array = [1, 2, 3, 4, 5];

// Use logical OR to handle undefined values
for (let i = (startIndex || 0); i < array.length; i++) {
    console.log(array[i]);
}

// Call the function to display groceries
document.addEventListener("DOMContentLoaded", function() {
    displayGroceries(groceries);
});
