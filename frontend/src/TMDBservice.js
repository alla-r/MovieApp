/* eslint-disable class-methods-use-this */
import axios from 'axios';
import i18next from 'i18next';

class TMDBservice {
  getLanguage() {
    return i18next.language || 'en-US';
  }

  getTrendings(pageNumber) {
    return axios.get(
      `/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&page=${pageNumber}`,
    );
  }

  getGenres(type) {
    return axios.get(
      `/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}&language=${this.getLanguage()}`,
    );
  }

  getFilteredMedia(mediaType, pageNumber, genreList) {
    return axios.get(
      `/discover/${mediaType}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=${this.getLanguage()}&sort_by=popularity.desc&page=${pageNumber}&with_genres=${genreList.join(
        ', ',
      )}`,
    );
  }

  getMediaDetails(mediaType, id) {
    return axios.get(
      `/${mediaType}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=${this.getLanguage()}&append_to_response=recommendations,credits`,
    );
  }

  getPersonDetails(id) {
    return axios.get(
      `/person/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=${this.getLanguage()}`,
    );
  }

  getPersonExternalIds(id) {
    return axios.get(
      `/person/${id}/external_ids?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=${this.getLanguage()}`,
    );
  }

  getPersonCredits(id) {
    return axios.get(
      `/person/${id}/combined_credits?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=${this.getLanguage()}`,
    );
  }

  getSearchData(mediaType, query, page = 1) {
    return axios.get(
      `/search/${mediaType}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=${this.getLanguage()}&query=${query}&page=${page}`,
    );
  }
}

export default new TMDBservice();
