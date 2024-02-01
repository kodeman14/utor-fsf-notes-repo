var tableBody = document.getElementById("repo-table");
var fetchButton = document.getElementById("fetch-button");

var BASE_API_URL = "https://api.github.com";
var NODEJS_ORG_REPOS = "/orgs/nodejs/repos";
var SPECIFIC_USER_REPOS = "/users/kodeman14/repos";

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  // var requestUrl = "https://api.github.com/orgs/nodejs/repos";
  var requestUrl = BASE_API_URL + NODEJS_ORG_REPOS;
  // var requestUrl = "https://api.github.com/orgs/coding-boot-camp/repos";

  var fetchApiRequest = fetch(requestUrl) // this gets some response from server
    .then(function (response) {
      console.log(response);
      return response.json();
    }); // convert response to json and send it to next ieration

  // console.log(fetchApiRequest);

  fetchApiRequest.then(function (data) {
    console.log(data.length);
    //Loop over the data to generate a table, each table row will have a link to the repo url
    for (var i = 0; i < data.length; i++) {
      // Creating elements, tablerow, tabledata, and anchor
      var createTableRow = document.createElement("tr");
      var tableData = document.createElement("td");
      var link = document.createElement("a");
      var license = document.createElement("p");
      var forks = document.createElement("span");

      // Setting the text of link and the href of the link
      link.textContent = data[i].full_name;
      if (data[i].html_url) {
        link.href = data[i].html_url;
      } else link.href = "no url";
      
      if (data[i].license) { // if true -> if not null
        license.textContent = "license: " + data[i].license.name;
      } else license.textContent = "no license";
      
      if (data[i].forks_count > 0) {
        forks.textContent = "forks: " + data[i].forks_count;
      }

      // if we wanna display the date, we know how to use dayjs

      // Appending the link to the tabledata and then appending the tabledata to the tablerow
      // The tablerow then gets appended to the tablebody
      tableData.appendChild(link);
      tableData.appendChild(license);
      tableData.appendChild(forks);
      createTableRow.appendChild(tableData);
      tableBody.appendChild(createTableRow);
    }
  });
}

fetchButton.addEventListener("click", getApi);
