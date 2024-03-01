// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName.toUpperCase();
  this.title = title.toUpperCase();
  this.text = text;
  this.createdOn = createdOn;

  this.printMetaData = function () {
    // return "Created by " + this.authorName + " on " + this.createdOn + ". more text: " + this.text;
    return `Created by ${this.authorName} on ${this.createdOn}.\nMore text: ${this.text}`;
  };
}

// console.log(new BlogPost());

// TODO: Create a new object using the 'BlogPost' constructor
const blogPost1 = new BlogPost(
  "george rr martin",
  "first winter",
  "whitewalkers",
  new Date("1997").getFullYear()
);

// TODO: Call the 'printMetaData()' method on the new object
console.log(blogPost1);
console.log(blogPost1.printMetaData());
