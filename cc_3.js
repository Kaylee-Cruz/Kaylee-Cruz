// cc_3.js
// Customer Records Tracker

// Making the customers array with 3 customers inside it

let customers = [
    {
        name: "John Smith",
        email: "jsmith@gmail.com",
        purchases: ["shoes", "hat", "jacket"]
    },
    {
        name: "Ashley Brown",
        email: "ashbrown@gmail.com",
        purchases: ["sunglasses", "bag"]
    },
    {
        name: "Carlos Rivera",
        email: "carlrivera@gmail.com",
        purchases: ["watch", "belt", "wallet"]
    }
]

console.log("starting customers array:")
console.log(customers)

// Adding a new customer with push and removing the first one with shift

let newCustomer = {
    name: "Megan Turner",
    email: "meganturner@gmail.com",
    purchases: ["scarf", "gloves"]
}

customers.push(newCustomer)
console.log("after adding megan:")
console.log(customers)

// now remove the first customer
customers.shift()
console.log("after removing first customer:")
console.log(customers)

// Updating customer info

// change ashleys email
customers[0].email = "ashley.brown2@gmail.com"
console.log("updated ashleys email to: " + customers[0].email)

// add a new purchase to carlos
customers[1].purchases.push("sunhat")
console.log("added a purchase to carlos")
console.log(customers[1])

// Loop through and display all customer info

console.log("here is all the customer info:")

customers.forEach(function(customer) {
    console.log(`Name: ${customer.name} | Email: ${customer.email} | Total Purchases: ${customer.purchases.length}`)
})
