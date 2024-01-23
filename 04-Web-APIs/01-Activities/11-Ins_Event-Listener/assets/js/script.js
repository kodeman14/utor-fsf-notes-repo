// Access toggle switch HTML element
var themeSwitcher = document.getElementById("theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

function themeChange() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.className = "light";
    // container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
}

document.querySelector("ul").addEventListener("click", function () {
  console.log("inside ul");
  document.querySelector("ul").children[0].style.color = "red";
});

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function () {
  // console.log("inside the click func");
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.className = "light";
    // container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});
