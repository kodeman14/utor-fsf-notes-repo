var userContainer = document.getElementById("users");
var fetchButton = document.getElementById("fetch-button");

function getApi() {
  var requestUrl = "https://api.github.com/users?per_page=100";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(async function (data) {
      for (var i = 0; i < data.length; i++) {
        var userName = document.createElement("p");
        var userUrl = document.createElement("p");
        var userImage = document.createElement("img");

        userName.textContent = "name: " + data[i].login;
        userUrl.textContent = "url: " + data[i].html_url;

        userImage.src = data[i].avatar_url;
        userImage.className = "avatar-img";

        // TODO: we now want each user's total followers (or) repos
        var followersUrl = data[i].followers_url;

        var fetchFollowers = fetch(followersUrl).then(function (response) {
          return response.json(); // returns array
        });

        var followersNum = await fetchFollowers.then(function (followerData) {
          // console.log("followerData", followerData);
          var followersNumber = followerData.length;
          return followersNumber;
        });

        var userFollowers = document.createElement("p");
        userFollowers.textContent = "followers: " + followersNum;

        // console.log(userName, userUrl, userImage);

        userContainer.append(userName);
        userContainer.append(userUrl);
        userContainer.append(userImage);
        userContainer.append(userFollowers);
      }
    });
}
fetchButton.addEventListener("click", getApi);
