var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");
var inputEl = $("#shopping-input");
// console.log(inputEl);

// TODO: Create a function to (handle the form submission event) that (captures the form's `<input>` value) and (prints it to the `shoppingListEl` as a `<li>`)
function handleFormSubmit(event) {
  event.preventDefault();
  var itemVal = inputEl.val();

  var listItemEl = $("<li>");
  listItemEl.text(itemVal);
  shoppingListEl.append(listItemEl);

  // error checking -> no entry of vals (takeaway)

  $('input[type="text"]').val("");
  // $('input[id="shopping-input"]').val("");
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", handleFormSubmit);

/**
 * <input type="text" class="form-input w-100" id="shopping-input" name="shopping-input" placeholder="Enter item name" />
      <button class="btn btn-info">Add Item</button>
 */
