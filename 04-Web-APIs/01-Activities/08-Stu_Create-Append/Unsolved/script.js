var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");
var li6 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

// option 1 : type all of them out

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
listEl.appendChild(li5);
listEl.appendChild(li6);

// OR option 2: use array format

// const listArr = [li1, li2, li3, li4, li5, li6];

// for (var i = 0; i < listArr.length; i++) {
//   listEl.appendChild(listArr[i]);
//   // listEl.appendChild(`li${i}`);
// }

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

listEl.setAttribute("style", "background-color: #333333; padding: 20px;");
li1.setAttribute(
  "style",
  "color: white; padding: 5px; margin-left: 35px; background-color: green;"
);
li2.setAttribute(
  "style",
  "color: white; padding: 5px; margin-left: 35px; background-color: blue;"
);
li3.setAttribute(
  "style",
  "color: white; padding: 5px; margin-left: 35px; background-color: red"
);
li4.setAttribute("style", "color: white; padding: 5px; margin-left: 35px;");
li5.setAttribute("style", "color: white; padding: 5px; margin-left: 35px;");
li6.setAttribute("style", "color: white; padding: 5px; margin-left: 35px;");

// TODO: Add ordered list items containing four favorite foods
li1.textContent = "pizza";
li2.textContent = "carrots";
li3.textContent = "rice";
li4.textContent = "cucumbers";
li5.textContent = "cauliflower";
li6.textContent = "peas";
