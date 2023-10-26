/* eslint-disable class-methods-use-this */

import axios from 'axios';
import StorageService from './StorageService';

class DBService {
  getToken() {
    return `Bearer ${StorageService.getUser().token}`;
  }

  getListData(list) {
    const config = {
      headers: { Authorization: this.getToken() },
    };

    return axios.get(`http://localhost:3001/api/list/${list}`, config);
  }

  addToList(list, details) {
    const config = {
      headers: { Authorization: this.getToken() },
    };

    return axios.post(`http://localhost:3001/api/list/${list}`, { details }, config);
  }

  changeRate(list, details) {
    return axios.put(`http://localhost:3001/api/list/${list}/${details.itemId}`, details);
  }

  removeFromList(list, details) {
    return axios.delete(`http://localhost:3001/api/list/${list}/${details.itemId}`);
  }

  getMediaDetails(id, type) {
    const config = {
      headers: { Authorization: this.getToken() },
      params: { id, type },
    };

    return axios.get(`http://localhost:3001/api/mediaDetails`, config);
  }

  registerUser(credentials) {
    return axios.post(`http://localhost:3001/api/users`, credentials);
  }

  loginUser(credentials) {
    return axios.post(`http://localhost:3001/api/login`, credentials);
  }
}

export default new DBService();
