var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count") || 0;

counter.textContent = count;

if (!count) {
  // counter.textContent = 0;
  // counter.textContent = "N/A";
} else {
  counter.textContent = count;
}

addButton.addEventListener("click", function () {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});
