# 📖 Implement Body Parsing for Post Requests

Work with a partner to implement the following user story:

* As a developer, I want my application to be backward compatible with URL-encoded data in addition to JSON.

## Acceptance Criteria

* It's done when I implement Express.js middleware to parse JSON in my server.

* It's done when I implement Express.js middleware to parse URL-encoded data in my server.

* It's done when I use Insomnia to make a POST request to `api/upvotes/:review_id`, using JSON to upvote a given post by passing in: 

```json
    {
        "upvote": true
    }
```

* It's done when I use Insomnia to make a POST request to `api/upvotes/:review_id`, using URL-encoded data to upvote a given post by passing in:

```
    "upvote"="true"
```
* It's done when I verify that both POST requests return a response that contains the updated vote count.

## 📝 Notes

Refer to the documentation:

[Express.js documentation on req.body](http://expressjs.com/en/api.html#req.body)

---

## 💡 Hints

How do we use Insomnia to pass data inside a `req.body` object when making a POST request to the server?

Take a look at the Form URL Encoded option in Insomnia to pass URL-encoded data.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is URL encoding?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
