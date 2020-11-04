import { apiKey, basedUrl, initialDate, currentDate } from "./constants";

export default class Api {
  constructor() {
    this._apiKey = apiKey;
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
    return this._fetch(`${basedUrl}q=${keyword}&from=${initialDate}&to=${currentDate}&sortBy=publishedAt&pageSize=100`, {
      method: "GET",
      headers: {
        'x-api-key': this._apiKey,
      },
    });
  }
 
}
