// TODO: Add a comment describing what kind of function this is
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
BlogPost.prototype.addComment = function (comment) {
  this.comments.push(comment);
};

const post1 = new BlogPost(
  "John Doe",
  "My Second Post",
  "Cats are super cute!",
  "12/16/2021"
);

const post2 = new BlogPost(
  "John Doe",
  "My Second Post",
  "Cats are super cute!",
  "12/16/2021"
);

post1.addComment("Nice post, I like it!");
post2.addComment("super helpful");

// IMPORTANT NOTE ABOUT DESTRUCTURING
// const object = {
//   objKey: objValue
// }
// const { objKey: variableName } = object
// console.log(variableName);

const { comments: comments1, title: title1 } = post1;
const { comments: comments2, title: title2 } = post2;
// TODO: Add a comment describing what you expect to see printed in the console
// console.log(post1.comments, post1.title);
console.log("post1", comments1, title1);
console.log("post2", comments2, title2);
