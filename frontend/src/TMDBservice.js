/* eslint-disable class-methods-use-this */
import axios from 'axios';

class TMDBservice {
  getTrendings(pageNumber) {
    return axios.get(
      `/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`,
    );
  }

  getGenres(type) {
    return axios.get(`/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
  }

  getFilteredMedia(mediaType, pageNumber, genreList) {
    return axios.get(
      `/discover/${mediaType}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&sort_by=popularity.desc&page=${pageNumber}&with_genres=${genreList.join(
        ', ',
      )}`,
    );
  }

  getMediaDetails(mediaType, id) {
    return axios.get(
      `/${mediaType}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=recommendations,credits`,
    );
  }
}

export default new TMDBservice();
