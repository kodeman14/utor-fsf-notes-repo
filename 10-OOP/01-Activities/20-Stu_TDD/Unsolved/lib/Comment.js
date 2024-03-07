const ForumItem = require('./ForumItem.js');

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }

  printMetaData() {
    return `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`;
  }
}

module.exports = Comment;
