// Coding Challenge 4
//Create an array of 5 product objects
// each product has a name, category, price, and inventory count

const products = [
    { name: "Laptop", category: "electronics", price: 999.99, inventory: 10 },
    { name: "T-Shirt", category: "apparel", price: 29.99, inventory: 50 },
    { name: "Blender", category: "household", price: 79.99, inventory: 20 },
    { name: "Headphones", category: "electronics", price: 149.99, inventory: 15 },
    { name: "Jeans", category: "apparel", price: 59.99, inventory: 30 }
];

// 3: Loop through each product and apply a discount based on category
// using a switch statement

console.log("Applying discounts to all products...");

for (let product of products) {
    let discount = 0;

    // use switch to check the category and set the discount
    switch (product.category) {
        case "electronics":
            discount = 0.20; // 20% off
            break;
        case "apparel":
            discount = 0.10; // 10% off
            break;
        case "household":
            discount = 0.10; // 10% off
            break;
        default:
            discount = 0; // no discount
    }

    // calculate the new price after discount
    let discountAmount = product.price * discount;
    product.discountedPrice = product.price - discountAmount;

    console.log(product.name + " original price: $" + product.price);
    console.log(product.name + " discount: " + (discount * 100) + "%");
    console.log(product.name + " new price: $" + product.discountedPrice.toFixed(2));
    console.log("---");
}

// 4: Create a customerType variable and use if/else if to give extra discounts

let customerType = "senior"; // can be "regular", "student", or "senior"

// will be used during checkout
let extraDiscount = 0;

if (customerType == "student") {
    extraDiscount = 0.05; // 5% extra off
    console.log("Customer is a student - 5% extra discount");
} else if (customerType == "senior") {
    extraDiscount = 0.07; // 7% extra off
    console.log("Customer is a senior - 7% extra discount");
} else {
    extraDiscount = 0; // no extra discount
    console.log("Customer is regular - no extra discount");
}

// 5: Simulate checkout for 3 customers using a while loop
// each customer buys 2 items, we calculate their total and reduce inventory

console.log("\nStarting checkout for 3 customers...");

// i will track which customer we are on
let i = 1;

while (i <= 3) {
    console.log("\nCheckout - Customer " + i);

    let total = 0;

    // customer 1 buys Laptop and T-Shirt
    if (i == 1) {
        total = total + products[0].discountedPrice;
        products[0].inventory = products[0].inventory - 1;
        console.log("Bought: " + products[0].name + " - $" + products[0].discountedPrice.toFixed(2));
        console.log(products[0].name + " inventory left: " + products[0].inventory);

        total = total + products[1].discountedPrice;
        products[1].inventory = products[1].inventory - 1;
        console.log("Bought: " + products[1].name + " - $" + products[1].discountedPrice.toFixed(2));
        console.log(products[1].name + " inventory left: " + products[1].inventory);
    }

    // customer 2 buys Blender and Headphones
    if (i == 2) {
        total = total + products[2].discountedPrice;
        products[2].inventory = products[2].inventory - 1;
        console.log("Bought: " + products[2].name + " - $" + products[2].discountedPrice.toFixed(2));
        console.log(products[2].name + " inventory left: " + products[2].inventory);

        total = total + products[3].discountedPrice;
        products[3].inventory = products[3].inventory - 1;
        console.log("Bought: " + products[3].name + " - $" + products[3].discountedPrice.toFixed(2));
        console.log(products[3].name + " inventory left: " + products[3].inventory);
    }

    // customer 3 buys Jeans and Laptop
    if (i == 3) {
        total = total + products[4].discountedPrice;
        products[4].inventory = products[4].inventory - 1;
        console.log("Bought: " + products[4].name + " - $" + products[4].discountedPrice.toFixed(2));
        console.log(products[4].name + " inventory left: " + products[4].inventory);

        total = total + products[0].discountedPrice;
        products[0].inventory = products[0].inventory - 1;
        console.log("Bought: " + products[0].name + " - $" + products[0].discountedPrice.toFixed(2));
        console.log(products[0].name + " inventory left: " + products[0].inventory);
    }

    // apply the extra customer type discount to the total
    let finalTotal = total - (total * extraDiscount);
    console.log("Customer " + i + " total: $" + finalTotal.toFixed(2));

    i++;
}

// 6: Use for...in to log each key/value pair for one product

console.log("\nProduct info using for...in (Laptop):");

for (let key in products[0]) {
    console.log(key + ": " + products[0][key]);
}

// 7: Use Object.entries() and destructuring to log all product info

console.log("\nAll product info using Object.entries:");

for (let product of products) {
    console.log("\n" + product.name + ":");
    for (let [key, value] of Object.entries(product)) {
        console.log("  " + key + ": " + value);
    }
}
