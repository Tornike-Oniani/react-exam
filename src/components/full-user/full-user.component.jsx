import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/loader/loader.component';
import Post from '../../components/post/post.component';

import { ReactComponent as UserPhoto } from '../../assets/address-book.svg';

import './full-user.style.scss';

const FullUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'GET',
      }),
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'GET',
      }),
    ])
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((response) => {
        setUser(response[0]);
        const userPosts = response[1].filter((post) => post.userId == id);
        setPosts(userPosts);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="full-user">
      <UserPhoto className="full-user__photo" />
      <div className="full-user__personal">
        <h2 className="full-user__alias">{user?.username}</h2>
        <h2 className="full-user__name">{user?.name}</h2>
        <p className="full-user__phone">{user?.phone}</p>
        <p className="full-user__website">{user?.website}</p>
      </div>
      <div className="full-user__location-info info-box">
        <h4 className="info-box__header">Address</h4>
        <ul className="info-box__list">
          <li className="info-box__item">
            <span className="info-box__label">City:</span>
            <span className="info-box__value">{user?.address.city}</span>
          </li>
          <li className="info-box__item">
            <span className="info-box__label">Street:</span>
            <span className="info-box__value">{user?.address.street}</span>
          </li>
          <li className="info-box__item">
            <span className="info-box__label">Suite:</span>
            <span className="info-box__value">{user?.address.suite}</span>
          </li>
          <li className="info-box__item">
            <span className="info-box__label">Zip:</span>
            <span className="info-box__value">{user?.address.zipcode}</span>
          </li>
        </ul>
      </div>
      <div className="full-user__company-info info-box">
        <h4 className="info-box__header">Company</h4>
        <li className="info-box__item">
          <span className="info-box__label">Name:</span>
          <span className="info-box__value">{user?.company.name}</span>
        </li>
        <li className="info-box__item">
          <span className="info-box__label">Phrase:</span>
          <span className="info-box__value">{user?.company.catchPhrase}</span>
        </li>
        <li className="info-box__item">
          <span className="info-box__label">BS:</span>
          <span className="info-box__value">{user?.company.bs}</span>
        </li>
        <p className="full-user__city"></p>
        <p className="full-user__street"></p>
        <p className="full-user__suite"></p>
      </div>

      <h2 className="full-user__post-header">Post history:</h2>
      <ul className="posts">
        {posts.map((post) => {
          return (
            <li key={post.id} className="posts__item">
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FullUser;
