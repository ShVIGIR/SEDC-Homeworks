// Calculate the price of 30 Phones

let phonePrice = 119.95;
let taxRate = 5;

function priceWithtTax(quantity) {
    let result = quantity * (phonePrice + ((phonePrice * taxRate) / 100));

    return result;
}

let firstSum = priceWithtTax(30);
console.log(firstSum);




// let phonePrice = 119.95;
// let quantity = 30;
// let taxRate = 5;
// let priceWithTax = phonePrice + ((phonePrice*taxRate)/100);
// let firstSum = priceWithTax * quantity;
// console.log (firstSum);
