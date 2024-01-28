// Highlight which elements in the DOM are the children of the parent element
// Uncomment the following two lines to see the which elements are the children to the #top
var rootEl = $("#top");

rootEl.children().css("color", "yellow");
console.log(rootEl.children());

// Uncomment the following line to see the which element is the first direct child of the <main>
rootEl.children().eq(0).addClass("boxy");

// Uncomment the following line to add a list item to the list
rootEl.children().eq(4).append($("<li>Classmates</li>"));

// Uncomment the following line to style the list items
rootEl
  .children("ul")
  .children()
  .addClass("bg-primary text-dark mb-3 p-3")
  .css("border-radius", ".4rem");

// append child to a parent -> parent.append(child)
// children of an element -> parent.children().eq(0).children().eq(0)
