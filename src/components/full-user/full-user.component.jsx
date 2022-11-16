import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as UserPhoto } from '../../assets/address-book.svg';

import './full-user.style.scss';

const FullUser = () => {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((response) => {
          setUser(response);
        }),
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((response) => {
          const userPosts = response.filter((post) => post.userId == id);
          setPosts(userPosts);
        }),
    ]);
  }, [id]);

  return (
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
            <li className="posts__item">
              <h4 className="posts__title">{post?.title}</h4>
              <p className="posts__text">{post?.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FullUser;
