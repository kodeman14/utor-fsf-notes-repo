var requestUrl = "https://api.github.com/users";

//Browser XMLHttpRequest, built in the browser and require more code.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log("XMLHttpRequest Response \n-------------");
    console.log(xhr.response);
  }
};
xhr.open("GET", requestUrl);
xhr.send();

function displayData(data) {
  console.log("Ajax Response \t-------------");
  console.log(data);
}

// AJAX call requires a third party library, jQuery
// saves the extra step of converting to json
$.ajax({
  url: requestUrl,
  method: "GET",
}).then(displayData);
// implicit option, data is sent automatically as a parameter this way

/**
 * xhr and ajax work in the same way as "fetch"
 * syntax is different, but logic is same
 */

/**
 * 
  $.ajax(reqUrl).then(data => {
    var pEl = document.querySelector('div');
    var pEl = document.createElement('p');
    pEl.textContet = data.whatever;
    div.appendChild(pEl);
  })
 *  */

/**
 * 
  fetch(reqUrl).then(res => res.json()).then(data => {
    var pEl = $('div');
    var pEl = $('p');
    pEl.text(data.whatever);
    div.append(pEl);
  })
 *  */
