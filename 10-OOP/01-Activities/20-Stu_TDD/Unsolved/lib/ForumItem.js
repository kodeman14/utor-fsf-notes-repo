class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }

  printMetaData() {
    return `Created by ${this.authorName} on ${this.createdOn}`;
  }
}

module.exports = ForumItem;
