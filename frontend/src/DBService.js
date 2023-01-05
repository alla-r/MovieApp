/* eslint-disable class-methods-use-this */

import axios from 'axios';

class DBService {
  getFavorites(userId) {
    debugger;
    return axios.get(
      `http://localhost:3001/api/favorites`,
    );
  }
}

export default new DBService();
