// Import readFile and writeFile from the fs/promises module. The fs/promises module exports methods that return
// promises for common file system tasks.
const { readFile, writeFile } = require('fs/promises');
const BlogPost = require('./lib/blogPost');

// TODO: First, call readFile to asynchronously read the data from data/post.json.
readFile('./data/post.json', 'utf-8').then((json) => {
  console.log('Received data from post.json');
  // TODO: parse the json string and assign the resulting object to a variable
  //
  // TODO: Use the BlogPost class to create a new BlogPost object and use its `render()` method to return an html string.
  //
  // TODO: Write the html to file
  //
});

// TODO: print a message in the console only after the html file is written.
