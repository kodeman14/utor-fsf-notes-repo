fetch('https://api.github.com/gists/public?since=2021-06-01&per_page=100&sort=asc')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

/**
 * api base url = api.github.com/
 * endpoint = gists/public
 * query = ? + since=2021-06-01 + & + per_page=100 + & + page=2
 */