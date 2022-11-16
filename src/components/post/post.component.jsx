import React from 'react';

import './post.style.scss';

const Post = ({ post: { title, body } }) => {
  return (
    <div className="post">
      <h4 className="post__title">{title}</h4>
      <p className="post__text">{body}</p>
    </div>
  );
};

export default Post;
