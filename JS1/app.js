
const rawCustomerName = " Sara ";
const bookTitle = "JavaScript Basics";
const unitPrice = 150;
const quantityText = "3";
const shippingCost = 30;


const cleanedCustomerName = rawCustomerName.trim();
console.log(`Original Name: "${rawCustomerName}"`);
console.log(`Cleaned Name: "${cleanedCustomerName}"`);


const quantity = Number(quantityText);
console.log(`Quantity (Text): ${quantityText}, Type: ${typeof quantityText}`);
console.log(`Quantity (Number): ${quantity}, Type: ${typeof quantity}`);


const subtotal = unitPrice * quantity;
const total = subtotal + shippingCost;


const receipt = `
--- BOOK ORDER RECEIPT ---
Customer Name : ${cleanedCustomerName}
Book Title    : ${bookTitle}
Unit Price    : $${unitPrice.toFixed(2)}
Quantity      : ${quantity}
Subtotal      : $${subtotal.toFixed(2)}
Shipping Cost : $${shippingCost.toFixed(2)}
Total Amount  : $${total.toFixed(2)}
--------------------------
`;

console.log(receipt);