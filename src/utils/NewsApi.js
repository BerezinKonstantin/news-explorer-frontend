import { apiKey, basedUrlNewsApi as basedUrl } from "./constants";

export default class Api {
  constructor() {
    this._currentDate = new Date();
    this._initialDate = new Date();
    this._initialDate.setDate(this._initialDate.getDate()-7);
    this._formatDate = (date) => {
    return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate())
    }
  }
  _fetch(url, params) {
    return fetch(url, params).then((result) => {
      if (result.ok) {
        return result.json();
      }
      return Promise.reject(result.status);
    });
  }
  getArticles(keyword) {
    return this._fetch(`${basedUrl}q=${keyword}&from=${this._formatDate(this._initialDate)}&to=${this._formatDate(this._currentDate)}&sortBy=publishedAt&pageSize=100`, {
      method: "GET",
      headers: {
        'x-api-key': apiKey,
      },
    });
  }
 
}
