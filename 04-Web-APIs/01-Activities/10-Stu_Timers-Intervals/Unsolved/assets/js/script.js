var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

// var message =
//   "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var message = "sorry for being boring";
var words = message.split(" ");

function countdown() {
  var timeLeft = 5; //camelCase
  // var timeleft = 5; //lowercase

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    //
    // YOUR CODE HERE
    //
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds left until words show up";
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "";
      displayMessage();
    }
  }, 1000); // every second
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
      mainEl.textContent = "";
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 750);
}

countdown();
