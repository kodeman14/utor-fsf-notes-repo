var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute(
  "src",
  "assets/images/image_1.jpg"
);
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute(
  "src",
  "assets/images/image_2.jpg"
);
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute(
  "src",
  "assets/images/image_3.jpg"
);
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

var h4SiteTags = document.querySelectorAll("h4");
console.log(h4SiteTags); // -> array

// functions/methods only exist on elements, not arrays
for (var i = 0; i < h4SiteTags.length; i++) {
  h4SiteTags[i].setAttribute(
    "style",
    "color: blue; font-size: 30px; font-weight: bold; padding-left: 10px; margin: 0"
  );
}

var h4SiteTagSingular = document.querySelector("h4"); // -> element
h4SiteTagSingular.setAttribute(
  "style",
  "color: red; font-size: 50px; font-weight: lighter; padding-left: 10px; margin: 10px"
);
