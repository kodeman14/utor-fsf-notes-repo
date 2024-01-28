var formEl = $("#pizza-form");
var firstNameEl = $('input[name="first-name"]');
// var firstNameEl = $('#first-name');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log("First Name:", firstNameEl.val());
  console.log("Last Name:", lastNameEl.val());
  console.log("Email:", emailEl.val());
  console.log("GitHub:", githubEl.val());

  // Select all checked options
  var checkedEl = $("input:checked");
  var selected = [];

  // Loop through checked options to store in array
  $.each(checkedEl, function () {
    // this -> items that were checked -> checkedEl
    selected.push($(this).val());
  });
  console.log("Toppings: ", selected.join(", "));

  // // Clear input fields
  // $(element[attrName=attrValue])
  $('input[type="text"]').val("");
  $('input[type="email"]').val("");
  $('input[type="checkbox"]').prop("checked", false);
}

// Submit event on the form
formEl.on("submit", handleFormSubmit);
// it'll pass event to the function call
