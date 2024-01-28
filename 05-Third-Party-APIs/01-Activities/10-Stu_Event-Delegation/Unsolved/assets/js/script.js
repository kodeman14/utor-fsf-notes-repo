var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log("No shopping item filled out in form!");
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val("");
}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
function handleDeleteListItem(event) {
  // remove the shopping item (row)
  console.log("hello, i'm delete");

  // event -> action that's happening
  // select the list item
  var listItem = $(event.target);
  // remove the list item -> result/reaction
  listItem.parent().remove();
  // li -> button : child
  // li <- button : parent
}

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
shoppingListEl.on("click", ".delete-item-btn", handleDeleteListItem);
shoppingFormEl.on("submit", handleFormSubmit);
