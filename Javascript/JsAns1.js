let bookTitle = "Life of Shake";
let price = 100;
let quantity = 100;
let taxRate = 5;

let subtotal = price * quantity;
let tax = subtotal * (taxRate / 100);
let total = subtotal + tax;

console.log(`You bought ${quantity} copies of "${bookTitle}".`)
console.log(`Subtotal: $${subtotal}`)
console.log(`Tax: $${tax}`)
console.log(`Total: ${total}` )