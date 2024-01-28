// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/

var rootEl = $("#root");
console.log(rootEl);

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
var nameEl = $("<p>");

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
nameEl.text("~ Carol Dweck");

// TODO: Add the class `plain` to the author element
nameEl.attr("class", "plain");
console.log(nameEl);

// rootEl.append("<h1>With jQuery we can:</h1>");
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
var quoteEl = $("<h1>");

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
quoteEl.text(
  "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
);

// TODO: Apply the class `fancy` to the quote element
quoteEl.attr("class", "fancy");

// TODO: Append the author element to the quote element
quoteEl.append(nameEl);

// parent (h1), child (title)
// quote element (parent)
// author element (child)
// author element (rhs) -> quote element (lhs)

// branch (rhs) -> main (lhs)
// main <- branch (final look)

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
// quote element (child)
// html element id root -> #root -> parent element
rootEl.append(quoteEl);
// -> claim 1: < name + quote >
// -> claim 2: < quote + name >

// rootEl.append(nameEl); // -> ~ carol dweck

/**
 * parent -> rootEl
 * child -> nameEl
 */

// rootEl -> grand....grand....parent element
// any elements we create in js -> we add after rootEl
// IMPT NOTE -> we can't append parent to a child
// why -> parent element needs to be there first, at the top, exist before child
// this means -> we have to append child to parent
// parent.append(child) -> correct syntax for jquery
