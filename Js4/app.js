const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000, inStock: true },
  { id: 2, name: "Phone", category: "Electronics", price: 600, inStock: true },
  { id: 3, name: "Shirt", category: "Clothing", price: 40, inStock: false },
  { id: 4, name: "Shoes", category: "Clothing", price: 80, inStock: true },
  { id: 5, name: "Book", category: "Books", price: 15, inStock: true }
];

console.log(products[0].name);
console.log(products[products.length - 1].name);
console.log(products.length);

for (let i = 0; i < products.length; i++) {
  console.log(`${products[i].name} - $${products[i].price}`);
}

const selectedCategories = new Set();
selectedCategories.add("Electronics");
selectedCategories.add("Clothing");
selectedCategories.add("Books");
selectedCategories.add("Electronics");

console.log(selectedCategories);
console.log(selectedCategories.size);
console.log(selectedCategories.has("Electronics"));

const currentUser = {
  id: 101,
  name: "Feras",
  email: "feras@example.com",
  address: {
    city: "Damascus",
    country: "Syria"
  }
};

console.log(currentUser.address.city);

const cartQuantity = new Map();
cartQuantity.set(1, 2);
cartQuantity.set(2, 1);
cartQuantity.set(4, 3);

console.log(cartQuantity.get(1));
console.log(cartQuantity.has(3));
console.log(cartQuantity.size);

function calculateCartTotal(products, cartQuantity) {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const quantity = cartQuantity.get(product.id) || 0;
    total += product.price * quantity;
  }

  return total;
}

const cartTotal = calculateCartTotal(products, cartQuantity);
console.log(cartTotal);