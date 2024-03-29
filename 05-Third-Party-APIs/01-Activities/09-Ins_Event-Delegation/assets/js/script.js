var displayEl = $("#display");
var showLettersBtnEl = $("#show-letters-btn");
var alphabetBtnsEl = $("#alphabet-buttons");
var clearEl = $("#clear");

// Immediately hide the clear button
clearEl.hide();

function renderLetters() {
  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "_",
  ];

  // Dynamically create buttons
  // Create a for-loop to iterate through the letters array.
  for (var i = 0; i < letters.length; i++) {
    // Create button
    var letterBtn = $("<button>");
    // Assign style to the button
    letterBtn.addClass("letter-button btn btn-info");
    // Assign the letter to the data-letter attribute
    letterBtn.attr("data-letter", letters[i]);
    // Display the letter
    letterBtn.text(letters[i]);
    // Attach the letter element
    alphabetBtnsEl.append(letterBtn);
  }
}

// Delegate event listener to the parent element, <div id="buttons">
alphabetBtnsEl.on("click", ".letter-button", function (event) {
  var displayLetterEl = $("<div>");

  displayLetterEl.addClass("letter");

  console.log($(event.target));

  // get letter from clicked letter button's `data-letter` attribute and use it for display
  displayLetterEl.text($(event.target).attr("data-letter"));
  // event.target -> specific button
  // .attr -> providing/checking attribute
  // .text -> giving/setting a text value
  displayEl.append(displayLetterEl);
});

// Renders the letter buttons on click
showLettersBtnEl.on("click", function () {
  // render letters
  renderLetters();
  // hide show letters button
  showLettersBtnEl.hide();
  // display clear button
  clearEl.show();
});

// Clears the message board of letters on click
clearEl.on("click", function () {
  displayEl.empty();
});
