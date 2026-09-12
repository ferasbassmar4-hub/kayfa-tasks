const ageInput = "20";
const hasTicket = true;
const isMember = false;
const ticketType = "vip";
const availableSeats = 5;

const age = Number(ageInput);
const isAdult = age >= 18;

console.log(`Age: ${age}, Type: ${typeof age}, Is Adult: ${isAdult}`);

const canEnter = isAdult && hasTicket && availableSeats > 0;

if (canEnter) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

let ticketPrice = 0;

if (canEnter) {
  if (ticketType === "regular") {
    ticketPrice = 200;
  } else if (ticketType === "vip") {
    ticketPrice = 500;
  } else if (ticketType === "student") {
    ticketPrice = 150;
  } else {
    console.log("Unknown ticket type");
  }
}

let finalPrice = ticketPrice;

if (isMember) {
  finalPrice = ticketPrice - 50;
}

if (finalPrice < 0) {
  finalPrice = 0;
}

const summary = `
--- SUMMARY ---
Age: ${age}
Adult: ${isAdult}
Has ticket: ${hasTicket}
Available seats: ${availableSeats}
Can enter: ${canEnter}
Ticket type: ${ticketType}
Member: ${isMember}
Final price: $${finalPrice}
---------------
`;

console.log(summary);

const acceptedTerms = false;

if (acceptedTerms) {
  console.log("Terms accepted");
} else {
  console.log("Terms not accepted");
}