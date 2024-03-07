// This class represents a BlogPost
class BlogPost {
  // Instantiates a BlogPost and validates input.
  constructor(title, text, author, createdOn) {
    if (title.length < 3) {
      throw new Error('`title` must contain at least 3 characters.');
    }

    if (text.length < 3) {
      throw new Error('`text` must contain at least 3 characters.');
    }

    // author must contain at least 3 characters, only have letters, numbers, and underscore. Author must begin with a
    // letter.
    if (!/[a-z][a-z0-9_]{2,}/i.test(author)) {
      throw new Error(`Invalid author "${author}"`);
    }

    this.title = title;
    this.text = text;
    this.author = author;

    if (createdOn instanceof Date) {
      this.createdOn = Date;
    } else {
      this.createdOn = new Date(createdOn);
    }

    // validate the date that was received
    if (Number.isNaN(this.createdOn.getTime())) {
      throw new Error(`Invalid createdOn "${createdOn}"`);
    }
  }

  // Returns createdOn as a formatted string. (e.g. 8/21/2022)
  formatCreatedOn() {
    // January is month 0. Must add 1.
    const month = this.createdOn.getMonth() + 1;
    const day = this.createdOn.getDay();
    const year = this.createdOn.getFullYear();
    return `${month}/${day}/${year}`;
  }

  // Returns BlogPost formatted as an html document string
  render() {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${this.title}</title>
    
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
    
          body {
            color: #333;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 18px;
            line-height: 1.5;
            background: linear-gradient(to right bottom, #ffffff, #fae6be) no-repeat
              center center fixed;
          }
    
          h1 {
            font-family: Georgia, 'Times New Roman', Times, serif;
          }
    
          hr {
            border: 0;
            height: 1px;
            background-image: linear-gradient(
              to right,
              #7f6c4700,
              #7f6c47b5,
              #7f6c4700
            );
            margin: 2rem 0;
          }
    
          .wrapper {
            min-width: 100vw;
          }
    
          .container {
            margin: 0 auto;
            max-width: 600px;
            width: 90%;
            padding-top: 3em;
          }
    
          .header {
            text-align: center;
          }
    
          .tagline {
            font-style: italic;
            color: #7f6c47;
          }
        </style>
      </head>
    
      <body class="wrapper">
        <div class="container">
          <header class="header">
            <h1>${this.title}</h1>
            <p class="tagline">by ${this.author}, ${this.formatCreatedOn()}</p>
          </header>
          <hr />
          <p>
            ${this.text}
          </p>
        </div>
      </body>
    </html>
    `;
  }
}

module.exports = BlogPost;
