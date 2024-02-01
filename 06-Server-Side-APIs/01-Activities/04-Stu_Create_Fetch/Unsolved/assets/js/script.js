var repoList = document.querySelector("ul");
var fetchButton = document.getElementById("fetch-button");

//getApi function is called when the fetchButton is clicked
var BASE_API_URL = "https://api.github.com";
var NODEJS_ORG_REPOS = "/orgs/nodejs/repos";
var SPECIFIC_USER_REPOS = "/users/kodeman14/repos";

function getApi() {
  // Insert the API url to get a list of your repos
  var requestUrl = BASE_API_URL + SPECIFIC_USER_REPOS;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var listItem = document.createElement("li");

        //Set the text of the list element to the JSON response's .html_url property
        listItem.textContent = data[i].html_url;

        //Append the li element to the id associated with the ul element.
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener("click", function () {
  // getApi()
  // whatever getApi contains
});
