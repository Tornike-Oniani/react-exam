import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../loader/loader.component';
import Comment from '../comment/comment.component';

import './full-post.style.scss';

const FullPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
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
        setBody(response[0].body);
        setComments(response[1]);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="full-post">
      <div className="full-post__wrapper">
        <h3 className="full-post__title">{title}</h3>
        <p className="full-post__body">{body}</p>
      </div>
      <h3 className="full-post__comment-label">{comments?.length} comments:</h3>
      {comments.map((comment) => {
        return <Comment key={comment?.id} info={comment} />;
      })}
    </div>
  );
};

export default FullPost;
