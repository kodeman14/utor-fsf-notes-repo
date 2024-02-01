var BASE_API_URL = "https://api.github.com";
var PRIMARY_ENDPOINT = "repos";
var SECONDARY_ENDPOINT = "issues";
var OWNER = "twitter";
var REPO = "chill";
var PER_PAGE_QUERY = "per_page";
var PER_PAGE_VALUE = "100";

// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl =
  BASE_API_URL +
  "/" +
  PRIMARY_ENDPOINT +
  "/" +
  OWNER +
  "/" +
  REPO +
  "/" +
  SECONDARY_ENDPOINT;

var queryUrl = requestUrl + "?" + PER_PAGE_QUERY + "=" + PER_PAGE_VALUE;

console.log(requestUrl);

// we don't know the owner value and repo value -> look this up
// we don't know the api url to hit for issues -> github api docs
// we don't know how to log 5 issues only (bonus) -> per_page (issues)
// we don't know how to add query to the api url -> look this up
// we don't know the url and username -> look at response in data

// var getFetchWeatherApi = (reqUrl) => {
//   fetch(reqUrl).then(blah);
// }

var getApiReq = (reqUrl) => {
  fetch(reqUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Twitter-Chill Repo Issues \n----------");
      // console.log(data);
      // TODO: Loop through the response
      for (var i = 0; i < data.length; i++) {
        console.log("index value:", i);
        console.log(data[i].html_url);
        console.log(data[i].user.login);
      }
      // TODO: Console log each issue's URL and each user's login
    });
};

getApiReq(queryUrl); // -> do the query search
getApiReq(requestUrl); // -> do the basic search
