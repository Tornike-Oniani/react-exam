import { baseUrl } from './base';

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/users`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        resolve(response);
      });
  });
};

export const getFullUser = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/users/${id}`, { method: 'GET' })
      .then((res) => res.json())
      .then((response) => {
        resolve(response);
      });
  });
};

export const getUserPosts = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/posts/`, { method: 'GET' })
      .then((res) => res.json())
      .then((response) => {
        const userPosts = response.filter((post) => post.userId == id);
        resolve(userPosts);
      });
  });
};

export const getFullPost = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/posts/${id}`)
      .then((res) => res.json())
      .then((response) => {
        resolve(response);
      });
  });
};

export const getPostComments = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/posts/${id}/comments`)
      .then((res) => res.json())
      .then((response) => resolve(response));
  });
};
