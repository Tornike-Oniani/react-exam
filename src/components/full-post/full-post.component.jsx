import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Comment from '../comment/comment.component';

import './full-post.style.scss';

const FullPost = () => {
  const [title, setTitle] = useState();
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
    ])
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((response) => {
        setTitle(response[0].title);
        setComments(response[1]);
      });
  }, [id]);

  return (
    <div className="full-post">
      <h3 className="full-post__title">{title}</h3>
      <h3 className="full-post__comment-label">Comments:</h3>
      {comments.map((comment) => {
        return <Comment key={comment?.id} info={comment} />;
      })}
    </div>
  );
};

export default FullPost;
