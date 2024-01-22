var hungerLevel = 50;
var isLunchTime = true;
var lunchBill = 9;

// If statement
// Evaluates to true so "Hungry" is logged

if (hungerLevel >= 50) {
  console.log("Hungry!");
} //yes

// Evaluates to false so nothing is logged
if (hungerLevel < 50) {
  console.log("I'm full!");
} //no

// Else statement
// Evaluates to true so "Lunchtime" is logged
if (isLunchTime === true) {
  console.log("Lunchtime");
} else {
  console.log("Not Lunchtime");
} // true -> not lunchtime

// isLunchTime is another way of writing "isLunchTime === true"
if (isLunchTime) {
  console.log("Lunchtime!!");
} else {
  console.log("Not Lunchtime!!");
}

// Evaluates to false so "It's Lunchtime Already" is logged
if (!isLunchTime) {
  console.log("Not Lunchtime Already!!");
} else {
  console.log("It's Lunchtime Already !!");
} // !true -> false -> it's lunchtime already

// Else if allows you to test more than one condition
// The first condition is false, so the second condition is evaluated. Logs "Cost Rating: $$""

if (lunchBill < 10) {
  if (lunchBill < 5) console.log("snack");
  else console.log("salad");

  console.log("Cost Rating: $");
} else if (lunchBill >= 10 && lunchBill < 15) {
  console.log("Cost Rating: $$");
} else if (lunchBill >= 15 && lunchBill < 20) {
  console.log("Cost Rating: $$$");
} else {
  console.log("Cost Rating: $$$$");
} //$$
