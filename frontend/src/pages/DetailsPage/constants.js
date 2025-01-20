import HeartIcon from '../../global/images/heart-icon.svg';
import StarIcon from '../../global/images/star-icon.svg';
import WatchlistIcon from '../../global/images/watchlist-icon.svg';
import i18next from '../../utils/i18n';

export const DETAILS_MOVIE_LIST_MAPPING = [
  {
    title: i18next.t('originalTitle'),
    value: 'originalTitle',
    type: 'text',
  },
  {
    title: i18next.t('status'),
    value: 'status',
    type: 'text',
  },
  {
    title: i18next.t('productionCountries'),
    value: 'productionCountries',
    type: 'array',
  },
  {
    title: i18next.t('productionCompanies'),
    value: 'productionCompanies',
    type: 'array',
  },
  {
    title: i18next.t('budget'),
    value: 'budget',
    type: 'money',
  },
  {
    title: i18next.t('revenue'),
    value: 'revenue',
    type: 'money',
  },
];

export const DETAILS_TV_LIST_MAPPING = [
  {
    title: i18next.t('originalTitle'),
    value: 'originalTitle',
    type: 'text',
  },
  {
    title: i18next.t('status'),
    value: 'status',
    type: 'text',
  },
  {
    title: i18next.t('productionCountries'),
    value: 'productionCountries',
    type: 'array',
  },
  {
    title: i18next.t('productionCompanies'),
    value: 'productionCompanies',
    type: 'array',
  },
];

export const CIRCULAR_BUTTONS_CONFIG = [
  {
    iconSrc: HeartIcon,
    id: 'favorite',
    tooltipActive: i18next.t('removeFromFavorites'),
    tooltipInactive: i18next.t('addToFavorites'),
  },
  {
    iconSrc: WatchlistIcon,
    id: 'watchlist',
    tooltipActive: i18next.t('removeFromWatchlist'),
    tooltipInactive: i18next.t('addToWatchlist'),
  },
  {
    iconSrc: StarIcon,
    id: 'rate',
    tooltipActive: i18next.t('changeYourRating'),
    tooltipInactive: i18next.t('rateMovie'),
  },
];

export const MOVIE_JOBS_TO_DISPLAY_LIST = ['Characters', 'Director', 'Writer', 'Screenplay'];

export const errorMessage = "Something went wrong. Couldn't fetch data.";
export const btnShowMoreContent = 'Full Cast & Crew';

export const getMessage = (action, listName, status) => {
  const config = {
    add: {
      success: i18next.t('addToListSuccess', {
        listName: i18next.t(`${listName}ListName`),
      }),
      error: i18next.t('addToListError', {
        listName: i18next.t(`${listName}ListName`),
      }),
    },
    remove: {
      success: i18next.t('removeFromListSuccess', {
        listName: i18next.t(`${listName}ListName`),
      }),
      error: i18next.t('removeFromListError', {
        listName: i18next.t(`${listName}ListName`),
      }),
    },
    update: {
      success: i18next.t('updateRateSuccess'),
      error: i18next.t('updateRateError'),
    },
  };
  return config[action][status];
};
