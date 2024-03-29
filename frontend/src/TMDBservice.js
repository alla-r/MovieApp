/* eslint-disable class-methods-use-this */
import axios from 'axios';

class TMDBservice {
  getTrendings(pageNumber) {
    return axios.get(
      `/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${pageNumber}`,
    );
  }

  getGenres(type) {
    return axios.get(`/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);
  }

  getFilteredMedia(mediaType, pageNumber, genreList) {
    return axios.get(
      `/discover/${mediaType}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=popularity.desc&page=${pageNumber}&with_genres=${genreList.join(
        ', ',
      )}`,
    );
  }

  getMediaDetails(mediaType, id) {
    return axios.get(
      `/${mediaType}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=recommendations,credits`,
    );
  }

  getPersonDetails(id) {
    return axios.get(`/person/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);
  }

  getPersonExternalIds(id) {
    return axios.get(
      `/person/${id}/external_ids?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
    );
  }

  getPersonCredits(id) {
    return axios.get(
      `/person/${id}/combined_credits?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`,
    );
  }

  getSearchData(mediaType, query, page = 1) {
    return axios.get(
      `/search/${mediaType}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&query=${query}&page=${page}`,
    );
  }
}

export default new TMDBservice();
