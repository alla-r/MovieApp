/* eslint-disable class-methods-use-this */

import axios from 'axios';

class DBService {
  getFavorites(userId) {
    return axios.get(
      `http://localhost:3001/api/favorites`,
    );
  }
  addToList(list, details) {
    return axios.post(
      `http://localhost:3001/api/${list}`,
      { details }
    );
  }
  removeFromList(list, details) {
    return axios.delete(
      `http://localhost:3001/api/${list}/${details.itemId}`,
    );
  }
  getMediaDetails(id, type, userId) {
    return axios.get(
      `http://localhost:3001/api/mediaDetails`,
      {params: { id, type, userId }}
    );
  }
}

export default new DBService();
