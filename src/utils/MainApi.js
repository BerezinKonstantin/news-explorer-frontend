import { basedUrlMainApi as basedUrl } from './constants';

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

export const getArticles = (token) => {
  return fetch(`${basedUrl}/articles`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
};

export const checkToken = (token) => {
  return fetch(`${basedUrl}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
};

export const saveArticle = (token, data) => {
  return fetch(`${basedUrl}/articles`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: data.keyword,
      title: data.title,
      text: data.text,
      date: data.date,
      source: data.source,
      image: data.image,
      link: data.link,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
};

export const deleteArticle = (token, cardId) => {
  return fetch(`${basedUrl}/articles/${cardId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    });
};
