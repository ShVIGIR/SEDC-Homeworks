// Homework
// Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price.
// Create an array of 15 products. 
// Now answer the following requirements:

// * Find all products with price greater than 20.
// * Get the names of all products of Category Food, that are on discount.
// * Get the price of all products that are on discount.
// * Find the name and price of all products with name starting with a vowel, that are not on discount.


class Product {
    constructor(pname, category, hasDiscount, pprice) {
        this.productName = pname;
        this.category = category;
        this.hasDiscount = hasDiscount;
        this.productPrice = pprice;
    }
}

let products = [
    new Product("Play station", "Electronics", true, 300),
    new Product("Shampoo", "Beauty & Care", true, 15),
    new Product("Apples", "Food", true, 3),
    new Product("Beef", "Food", true, 8),
    new Product("Weights", "Sports", false, 25),
    new Product("Macaroni", "Food", false, 3),
    new Product("Diapers", "Baby Care", false, 10),
    new Product("Desk", "Furniture", false, 400),
    new Product("Avocado", "Food", false, 2),
    new Product("Cheese", "Food", true, 5),
    new Product("Chair", " Furniture", false, 30),
    new Product("Dress", "Clothes", true, 3),
    new Product("Behind her eyes - Sara Pinboroy", "Books", true, 9),
    new Product("Monopoly", "Toys", false, 5),
    new Product("Salami", "Food", false, 2),
];




//task 1
console.log(`========================================task1===================================`);

//E.g.1
function checkPrice(product) {
    return product.productPrice > 20;
}
let productsAbove20 = products.filter(checkPrice);
console.log(`Produts with price greather then 20:`);
console.log(productsAbove20);


// E.g.2
console.log(`Products with price greather then 20: `);
products.filter(product => product.productPrice >= 20).forEach(product => console.log(`${product.productName} ${product.category}  ${product.productPrice}`));




//task2
console.log(`=======================================task2====================================`);

//E.g.1
function selectProduct(product) {
    return product.category === "Food" && product.hasDiscount === true;

}
let productsOnFoodCategory = products.filter(selectProduct);
console.log(`Product in food category that are on discount:`);
console.log(productsOnFoodCategory);

//E.g.2

console.log(`Product in food category that are on discount:`);

products.filter(product => product.category === "Food" && product.hasDiscount === true).forEach(product => console.log(`${product.productName}`));



//task3
console.log(`=====================================task3=====================================`);

//E.g.1

function productOnDiscount(product) {
    return product.hasDiscount === true;
}
let productsOnDiscount = products.filter(productOnDiscount);
console.log(`Price of all products that are on discount: `);
console.log(productsOnDiscount);

//E.g.2

console.log(`Price of all products that are on discount: `);
products.filter(product => product.hasDiscount === true).map(product => console.log(`${product.productPrice}, the price of ${product.productName}`));  //dodadov i ime da se znae od sto proizvod e


//task4
console.log(`=====================================task4=====================================`);

//E.g.1

function aVowelAndDiscount(product) {
    for (let i = 0; i < products.length; i++) {
        if (product.productName[0] === "a".toUpperCase() && product.hasDiscount === false) {
            return `${product.productName} ${product.productPrice}`;
        }
    }
}
console.log(`Products with name starting with a vowel, that are not on discount:`);
let productsSome = products.filter(aVowelAndDiscount);
console.log(productsSome);


//E.g.2
console.log(`Products with name starting with a vowel, that are not on discount:`);
products.filter(product => product.productName[0] === "a".toUpperCase() && product.hasDiscount === false).map(product => console.log(`${product.productName} ${product.productPrice}`));