import i18next from '../../utils/i18n';

export const GET_LIST_DATA_REQUEST = 'GET_LIST_DATA_REQUEST';
export const GET_LIST_DATA_SUCCESS = 'GET_LIST_DATA_SUCCESS';
export const GET_LIST_DATA_ERROR = 'GET_LIST_DATA_ERROR';

export const CHANGE_MEDIA_CUSTOM_DETAILS_REQUEST = 'CHANGE_MEDIA_CUSTOM_DETAILS_REQUEST';
export const CHANGE_MEDIA_CUSTOM_DETAILS_SUCCESS = 'CHANGE_MEDIA_CUSTOM_DETAILS_SUCCESS';
export const CHANGE_MEDIA_CUSTOM_DETAILS_ERROR = 'CHANGE_MEDIA_CUSTOM_DETAILS_ERROR';

export const HEADINGS = {
  watchlist: i18next.t('watchlist'),
  favorites: i18next.t('favorites'),
  rate: i18next.t('ratings'),
};

export const RATE_UPDATE_MESSAGE_CONFIG = {
  error: i18next.t('updateRateError'),
  success: i18next.t('updateRateSuccess'),
};

export const REMOVE_MESSAGE_CONFIG = {
  error: i18next.t('updateRateError'),
  success: i18next.t('updateRateSuccess'),
};
