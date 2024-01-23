var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");
var maxOuter = document.querySelector(".max-outer-div");
var button2 = document.querySelector(".button2");

// preventDefault -> stopPropagation

function changeBlue(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute("style", "background-color: blue");
}

function changeWhite(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute("style", "background-color: white");
}

function changePurple(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute("style", "background-color: #601A4A");
}

function changeOrange(event) {
  event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: #EE442F; color: white;"
  );
}

function changeGreen(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: green; color: white;"
  );
}

// # => pound, hash, hashtag

maxOuter.addEventListener("click", changeGreen);
outer.addEventListener("click", changePurple);
inner.addEventListener("click", changeOrange);
button.addEventListener("click", changeBlue);
button2.addEventListener("click", changeWhite);
