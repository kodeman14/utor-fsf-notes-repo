var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  // assigning count to the text
  countEl.textContent = count;
}

// * It's done when a user clicks on the increment button and the count is increased by `2`.

// * It's done when a user clicks on the decrement button and, if the count is greater than `10`, the count is decreased by `2`.

// TODO: Add event listener to increment button
// NOTE: be wary of how you're calling the elements
incrementEl.addEventListener("click", function () {
  console.log("inside increment button");
  // increment count variable
  // current value = 0
  // new value = 1
  // previous value = 0

  count = count + 1;
  // count++; //increment by 1
  // count += 5; // operation with itself
  console.log("inc count val", count);
  setCounterText();
});

// TODO: Add event listener to decrement button
decrementEl.addEventListener("click", function () {
  console.log("inside decrement function");
  // if 0, count = 0 - 1 = -1 (don't want)
  if (count > 0) count = count - 1;
  console.log("dec count val", count);
  setCounterText();
});
