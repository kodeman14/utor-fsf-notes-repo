// console.log("Document Body: ");
// console.log(document.body);

// console.log("Children of Document Body: ");
// console.log(document.body.children);
// // all child elements -> array

// console.log("First child of body: ");
// console.log(document.body.children[0]);
// // just the h1 tag -> 0th index

// console.log("First child of the ul: ");
// console.log(document.body.children[1].children[0]);
// document.body.children[1] -> ul
// ...children[0] -> li -> #first-child-ul

// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul");
console.log("before style", firstChildUl); // logs the entire tag (singular)
// <li class="list-item" id="first-child-ul">Children[0]</li>

// console.log(firstChildUl.textContent);
// Children[0] -> logs the text of the tag/id

firstChildUl.style.color = "green";
// NOTE: JS runs async, so everything on the page is applied right away

// ----

// Setting style of element
setTimeout(function () {
  // first element of the list is affected
  // firstChildUl.style.color = "green";
  firstChildUl.classList.add("green-color");
  console.log("changing color");
}, 5000);

setTimeout(() => {
  console.log("after style", firstChildUl); // logs the entire tag
}, 6000);

// <li class="list-item" id="first-child-ul style="color: "green";"">Children[0]</li>

// ----

// -----

// var childrenUl = document.getElementsByClassName("list-item");
// console.log(childrenUl);
// log multiple elements
// all of the text -> array
