const Comment = require('../lib/Comment.js');

describe('Comment', () => {
  // TODO: Add a comment describing this test.
  describe('Instantiate', () => {
    it('should be an instance of Comment class', () => {
      const comment = new Comment();

      expect(comment).toBeInstanceOf(Comment);
    });
  });

  // TODO: Add a comment describing this test.
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      const authorName = 'Jane Doe';
      const comment = new Comment(authorName);

      expect(comment.authorName).toBe(authorName);
    });
  });

  // TODO: Add a comment describing this test.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = 'This post is super cool!';
      const comment = new Comment('Jane Doe', text);

      expect(comment.text).toBe(text);
    });
  });

  // TODO: Add a comment describing this test.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      const createdOn = '12/15/2021';
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        createdOn
      );

      expect(comment.createdOn).toBe(createdOn);
    });
  });

  // TODO: Add a comment describing this test.
  describe('Initialize reaction', () => {
    it('should set reaction properly', () => {
      const reaction = '🐶';
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        '12/15/2021',
        reaction
      );

      expect(comment.reaction).toBe(reaction);
    });
  });

  // TODO: Add a comment describing this test.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        '12/15/2021',
        '🐶'
      );

      expect(comment.printMetaData()).toBe(
        `Created by Jane Doe on 12/15/2021 🐶`
      );
    });
  });
});
