// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203",
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

// NOTE: they're not using the inbuilt js function/method for navigate
function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function () {
  // console.log("clicked carousel");
  window.location.href = images[index];
});
// -> when image/div clicked, directs you to image location (online)

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function (event) {
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation();

  navigate(1);
});
// -> when clicked, goes to the next image

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();
  // -> stopping the parent div from opening the link

  navigate(-1);
});

navigate(0);

/** 
 * NOTE:
- stops parent event from child, if there is a parent event
- if "stopPropagation" is not there, then child event will happen and parent event will happen
*/
