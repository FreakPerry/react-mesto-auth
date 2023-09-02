import { setToken } from './token';

const handleResponse = async data => {
  const res = await data.json();
  if (data.ok) {
    return res;
  } else {
    return Promise.reject(res);
  }
};

export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password
    })
  }).then(handleResponse);
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(handleResponse)
    .then(data => {
      if (data.token) {
        setToken(data.token);
        return data;
      } else {
        return null;
      }
    });
};

export const getContent = token => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(handleResponse);
};
