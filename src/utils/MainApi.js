import { basedUrlMainApi as basedUrl } from "./constants";

export const signup = ({ password, email, name }) => {
  return fetch(`${basedUrl}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
      name: name
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
};

export const login = ({ password, email }) => {
  return fetch(`${basedUrl}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
};

export const getCheckToken = (token) => {
  return fetch(`${basedUrl}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          throw new Error('Токен не передан или передан не в том формате');
        }
        if (res.status === 401) {
          throw new Error('Переданный токен некорректен');
        }
      } catch (err) {
        return err;
      }
    })
    .then((res) => res);
};
