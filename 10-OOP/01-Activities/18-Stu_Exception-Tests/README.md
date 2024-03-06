# 📖 Implement and Test for an Exception

Work with a partner to implement the following user story:

* As a developer, I want the `BlogPost` constructor to throw an error when it is given invalid input so that I catch more bugs before deploying changes.

## Acceptance Criteria

* It's done when I have added tests for an exception when `new BlogPost()` is passed an invalid authorName.  

* It's done when I have run `npm run test` and all tests pass.

## 📝 Notes

A valid author is a string with at least 2 characters and no more than 15 that
begins with a letter and contains only letters, numbers, dashes, and underscores.
(`-`, `_`)

Refer to the documentation:

[Jest documentation on using Exceptions](https://jestjs.io/docs/using-matchers#exceptions)

[Mozilla documentation on `throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

---

## 💡 Hints

* What are some different test values for author that you should pass to `new BlogPost()` that should make it throw an exception?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can Jest be used to test asynchronous code?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
