
let item = prompt("Welcome to our Shop \n What would you like to buy? \n Enter the name of the item you want to buy: ");
let price = prompt("Enter the price of the item: ");
let quantity = prompt("Enter the quantity of the item: ");
alert(`You have purchased ${quantity} ${item}(s) at a price of $${price} each. \nThe total cost is $${price * quantity}.`);