function keydownAction(event) {
  // TODO: Complete keydown function
  console.log("key is pressed down");
  console.log("key", event.key);
  console.log("code", event.code); //keyCode
  // var key = event.key;
  // var code = event.code;

  document.querySelector("#code").textContent = event.code;
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction() {
  console.log("key has been left alone");
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
