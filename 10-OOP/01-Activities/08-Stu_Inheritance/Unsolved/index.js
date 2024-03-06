// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
  constructor(authorName, createdOn, text) {
    this.authorName = authorName.toUpperCase();
    this.createdOn = createdOn;
    this.text = text;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, createdOn, text);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn) {
    super(authorName, createdOn, text);
  }
}

// TODO: Create a new object using the Comment class constructor.
const comment1 = new Comment("whatever", "bought a ps5", "4/3/2024");
// TODO: Create a new object using the BlogPost class constructor.

// TODO: Log both newly created BlogPost and Comment to the console.
console.log(comment1.authorName);
