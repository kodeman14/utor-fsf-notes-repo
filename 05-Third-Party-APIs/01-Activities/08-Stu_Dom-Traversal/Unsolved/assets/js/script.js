// Assemble: Create/select DOM elements
// var rootEl = $("#root");

/**
* It's done when the X player is blocked from winning.

* It's done when the O player has won.
 */

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
$("#root").children("ul").children().css("background-color", "white");

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning -> 0 1 2 3 -> nothing
$("#root").children("ul").eq(2).children().eq(0).text("O");

// rootEl.children("ul").eq(1).children().eq(2).text("X");
// rootEl.children("ul").eq(0).children().eq(1).text("O");
