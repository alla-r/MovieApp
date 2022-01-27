import HeartIcon from '../../global/images/heart-icon.svg';
import StarIcon from '../../global/images/star-icon.svg';
import WatchlistIcon from '../../global/images/watchlist-icon.svg';

export const GET_MEDIA_DETAILS_REQUEST = 'GET_MEDIA_DETAILS_REQUEST';
export const GET_MEDIA_DETAILS_SUCCESS = 'GET_MEDIA_DETAILS_SUCCESS';
export const GET_MEDIA_DETAILS_ERROR = 'GET_MEDIA_DETAILS_ERROR';
export const GET_MEDIA_DETAILS = 'GET_MEDIA_DETAILS';
export const MEDIA_DETAILS_CLEAR_DATA = 'MEDIA_DETAILS_CLEAR_DATA';

// move header and footer
export const PROFILE_DROPDOWN_DATA = [
  {
    content: 'Watchlist',
    clickHandler: () => {
      console.log('watchlist');
    },
  },
  {
    content: 'Favorites',
    clickHandler: () => {
      console.log('favorites');
    },
  },
  {
    content: 'Sign Out',
    clickHandler: () => {
      console.log('sign out');
    },
  },
];

export const HEADER_ITEMS = [
  {
    content: 'Movies',
    clickHandler: () => {
      console.log('Movies');
    },
  },
  {
    content: 'TV Shows',
    clickHandler: () => {
      console.log('TV Shows');
    },
  },
];

export const DETAILS_MOVIE_LIST_MAPPING = [
  {
    title: 'Original Title',
    value: 'originalTitle',
    type: 'text',
  },
  {
    title: 'Status',
    value: 'status',
    type: 'text',
  },
  {
    title: 'Production Countries',
    value: 'productionCountries',
    type: 'array',
  },
  {
    title: 'Production Companies',
    value: 'productionCompanies',
    type: 'array',
  },
  {
    title: 'Budget',
    value: 'budget',
    type: 'money',
  },
  {
    title: 'Revenue',
    value: 'revenue',
    type: 'money',
  },
];

export const DETAILS_TV_LIST_MAPPING = [
  {
    title: 'Original Title',
    value: 'originalTitle',
    type: 'text',
  },
  {
    title: 'Status',
    value: 'status',
    type: 'text',
  },
  {
    title: 'Production Countries',
    value: 'productionCountries',
    type: 'array',
  },
  {
    title: 'Production Companies',
    value: 'productionCompanies',
    type: 'array',
  },
];

export const CIRCULAR_BUTTONS_CONFIG = [
  {
    iconSrc: HeartIcon,
    id: 'favorite',
    isActive: true,
    onClickHandler: () => console.log('add to favorites'),
  },
  {
    iconSrc: WatchlistIcon,
    id: 'watchlist',
    isActive: false,
    onClickHandler: () => console.log('watchlist'),
  },
  {
    iconSrc: StarIcon,
    id: 'rate',
    isActive: false,
    onClickHandler: () => console.log('rate'),
  },
];

export const MOVIE_JOBS_TO_DISPLAY_LIST = ['Characters', 'Director', 'Writer', 'Screenplay'];

export const errorMessage = "Something went wrong. Couldn't fetch data.";
export const btnShowMoreContent = 'Full Cast & Crew';
