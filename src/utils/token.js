const token_key = 'jwt';

export const setToken = token => {
  localStorage.setItem(token_key, token);
};

export const getToken = () => {
  return localStorage.getItem(token_key);
};

export const removeToken = () => {
  localStorage.removeItem(token_key);
};
