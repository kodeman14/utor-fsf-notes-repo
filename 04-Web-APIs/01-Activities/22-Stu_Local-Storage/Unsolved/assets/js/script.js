var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#last-email");
var userPasswordSpan = document.querySelector("#last-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  console.log("inside render last");
  // TODO:
  // [Retrieve the last email and password] (check)
  // and
  // [render it to the page (get item)] (check)
  var email = localStorage.getItem("lastEmail");
  var password = localStorage.getItem("lastPassword");
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // TODO:
    // [Save email and password to localStorage] (check)
    // and
    // [render the last registered user (set item)] (check)
    localStorage.setItem("lastEmail", email);
    localStorage.setItem("lastPassword", password);
    renderLastRegistered();
  }
});
