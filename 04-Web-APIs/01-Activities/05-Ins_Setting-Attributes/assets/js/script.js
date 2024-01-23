// Access multiple elements using .querySelectorAll()
var divTags = document.querySelectorAll("div");
var divTag = document.querySelectorAll("div");
var pTags = document.querySelectorAll("p");
var imgEl = document.querySelectorAll("img");

var divTag1 = document.querySelector("div"); // targets the first reference

// Access element by ID using .querySelector()
var changeP = document.querySelector("#change2");

/**
 * NOTE:
 * -> if element, use querySelector (or) querySelectorAll (can also be used on class or id, but recommend not to)
 * -> if class, use getElementsByClassName
 * -> if id (singular), use getElementById
 */

// var changePqs = document.querySelector("#change2");
// var changePgetEl = document.getElementById("change2");

// Sets first pTags to have a font-size of 40px
pTags[0].setAttribute("style", "font-size: 40px;");
// pTags[0].style.fontSize = "40px";
// pTags[0].style.fontWeight = "bold";
// pTags[0].style.textDecoration = "underline";

// Sets changeP to have multiple style attributes
changeP.setAttribute(
  "style",
  "font-size: 25px; font-weight: bold; text-decoration:underline; "
);

// Sets image source of the first image
imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to image
imgEl[0].setAttribute("style", "width:50%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
}
