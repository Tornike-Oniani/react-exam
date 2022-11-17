import React from 'react';
import { Link } from 'react-router-dom';

import './post.style.scss';

const Post = ({ post: { id, title, body } }) => {
  return (
    <div className="post">
      <Link to={`/posts/${id}`} className="post__title">
        {title}
      </Link>
      <p className="post__text">{body}</p>
    </div>
  );
};

export default Post;
