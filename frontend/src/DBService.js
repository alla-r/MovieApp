/* eslint-disable class-methods-use-this */

import axios from 'axios';

class DBService {
  getListData(list, userId) {
    return axios.get(
      `http://localhost:3001/api/list/${list}`,
    );
  }
  addToList(list, details) {
    return axios.post(
      `http://localhost:3001/api/list/${list}`,
      { details }
    );
  }
  changeRate(list, details) {
    return axios.put(
      `http://localhost:3001/api/list/${list}/${details.itemId}`,
      details
    );
  }
  removeFromList(list, details) {
    return axios.delete(
      `http://localhost:3001/api/list/${list}/${details.itemId}`,
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
