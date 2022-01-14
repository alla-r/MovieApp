export const GET_TRENDINGS_REQUEST = 'GET_TRENDINGS_REQUEST';
export const GET_TRENDINGS_SUCCESS = 'GET_TRENDINGS_SUCCESS';
export const GET_TRENDINGS_ERROR = 'GET_TRENDINGS_ERROR';

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
