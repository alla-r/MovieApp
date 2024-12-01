/* eslint-disable class-methods-use-this */
import axios from 'axios';
import i18next from 'i18next';
import { DEFAULT_LANGUAGE } from './utils/i18n/constants';

class TMDBservice {
  locale = i18next.language || DEFAULT_LANGUAGE;

  setLocale(lang) {
    this.locale = lang;
  }

  getTrendings(pageNumber) {
    return axios.get(
      `/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=${
        this.locale
      }&page=${pageNumber}`,
    );
  }

  getGenres(type) {
    return axios.get(
      `/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}&language=${this.locale}`,
    );
  }

  getFilteredMedia(mediaType, pageNumber, genreList) {
    return axios.get(
      `/discover/${mediaType}?api_key=${import.meta.env.VITE_API_KEY}&language=${
        this.locale
      }&sort_by=popularity.desc&page=${pageNumber}&with_genres=${genreList.join(', ')}`,
    );
  }

  getMediaDetails(mediaType, id) {
    return axios.get(
      `/${mediaType}/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=${
        this.locale
      }&append_to_response=recommendations,credits`,
    );
  }

  getPersonDetails(id) {
    return axios.get(
      `/person/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=${this.locale}`,
    );
  }

  getPersonExternalIds(id) {
    return axios.get(
      `/person/${id}/external_ids?api_key=${import.meta.env.VITE_API_KEY}&language=${this.locale}`,
    );
  }

  getPersonCredits(id) {
    return axios.get(
      `/person/${id}/combined_credits?api_key=${import.meta.env.VITE_API_KEY}&language=${
        this.locale
      }`,
    );
  }

  getSearchData(mediaType, query, page = 1) {
    return axios.get(
      `/search/${mediaType}?api_key=${import.meta.env.VITE_API_KEY}&language=${
        this.locale
      }&query=${query}&page=${page}`,
    );
  }
}

export default new TMDBservice();
