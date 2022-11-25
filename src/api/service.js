import { baseUrl } from './base';

export const getUsers = () => {
  return fetch(`${baseUrl}/users`, {
    method: 'GET',
  }).then((res) => res.json());
};

export const getFullUser = (id) => {
  return fetch(`${baseUrl}/users/${id}`, { method: 'GET' }).then((res) =>
    res.json()
  );
};

export const getUserPosts = (id) => {
  return fetch(`${baseUrl}/posts/`, { method: 'GET' })
    .then((res) => res.json())
    .then((response) => {
      const userPosts = response.filter((post) => post.userId == id);
      return userPosts;
    });
};

export const getFullPost = (id) => {
  return fetch(`${baseUrl}/posts/${id}`).then((res) => res.json());
};

export const getPostComments = (id) => {
  return fetch(`${baseUrl}/posts/${id}/comments`).then((res) => res.json());
};
