import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../loader/loader.component';
import Comment from '../comment/comment.component';

import { getFullPost, getPostComments } from '../../api/service';

import './full-post.style.scss';

const FullPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Promise.all([getFullPost(id), getPostComments(id)])
      .then((results) => {
        setTitle(results[0].title);
        setBody(results[0].body);
        setComments(results[1]);
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
