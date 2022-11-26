import { baseUrl } from './base';

const fetchJson = (url) => {
  return fetch(url, { method: 'GET' }).then((res) => res.json());
};

export const getUsers = () => {
  return fetchJson(`${baseUrl}/users`);
};

export const getFullUser = (id) => {
  return fetchJson(`${baseUrl}/users/${id}`);
};

export const getUserPosts = (id) => {
  return fetchJson(`${baseUrl}/posts/`).then((response) => {
    const userPosts = response.filter((post) => post.userId == id);
    return userPosts;
  });
};

export const getFullPost = (id) => {
  return fetchJson(`${baseUrl}/posts/${id}`);
};

export const getPostComments = (id) => {
  return fetchJson(`${baseUrl}/posts/${id}/comments`);
};
