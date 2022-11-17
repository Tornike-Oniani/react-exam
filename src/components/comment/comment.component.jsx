import React from 'react';

import './comment.style.scss';

const Comment = ({ info: { name, body, email } }) => {
  return (
    <div className="comment">
      <h4 className="comment__name">{name}</h4>
      <p className="comment__body">{body}</p>
      <p className="comment__email">{email}</p>
    </div>
  );
};

export default Comment;
