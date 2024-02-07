var badRequestUrl = "https://api.github.com/unicorns";
var redirectUrl = "./404.html";

fetch(badRequestUrl)
  .then(function (response) {
    // Use a conditional to check the response status.
    // If that status equals the conditional, then redirect to the 404 page.
    setTimeout(function () {
      if (response.status === 404) {
        console.log("in 404 status", response);
        document.location.replace(redirectUrl);
      } else {
        console.log("in other status");
      }
    }, 1500); // this is just to delay for us to view
    return response.json();
    // console.log(response);
  })
  .then(function (data) {
    // console.log(data);
    // not needed for now
    // put this link in <a> tag for users to click
    // if (data.documentation_url) {
    //   window.location.replace(data.documentation_url);
    // }
  });
