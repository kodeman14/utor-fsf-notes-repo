import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_THOUGHTS } from '../../utils/queries';

// TODO: Comments are not being added to the database the way we expect, and an error is shown on form submit
const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const { addComment, loading, error } = useMutation(ADD_COMMENT, {
    variables: { thoughtId, commentText },
    refetchQueries: [
      QUERY_THOUGHTS,
      'getThoughts'
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment();

      setCommentText('');
      setCharacterCount(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What are your thoughts on this thought?</h4>
      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="commentText"
            placeholder="Add your comment..."
            value={commentText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
