// Access element using id
var articlesDiv = document.getElementById("articles"); // fetches <div id="articles">
var headerDiv = document.getElementById("header"); // fetches <header id="header">

// Change style by accessing style object's properties
headerDiv.children[0].style.color = "white";
headerDiv.children[1].style.color = "green";

articlesDiv.children[0].children[1].style.fontSize = "40px";
// articlesDiv.children[0].style.fontSize = "50px";
// articlesDiv.children[2].style.fontSize = "50px";

console.log(document.body.children);
console.log(headerDiv.children[0]);
console.log(articlesDiv.children);
console.log("section", articlesDiv.children[1].children);
console.log("article", articlesDiv.children[0].children);
