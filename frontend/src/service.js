/* eslint-disable class-methods-use-this */
import axios from 'axios';

class TMDBservice {
  getTrendings(pageNumber) {
    return axios.get(
      `/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`
    );
  };
}

export default new TMDBservice();
