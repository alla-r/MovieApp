export const GET_MEDIA_DETAILS_REQUEST = 'GET_MEDIA_DETAILS_REQUEST';
export const GET_MEDIA_DETAILS_SUCCESS = 'GET_MEDIA_DETAILS_SUCCESS';
export const GET_MEDIA_DETAILS_ERROR = 'GET_MEDIA_DETAILS_ERROR';
export const GET_MEDIA_DETAILS = 'GET_MEDIA_DETAILS';

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

// export const errorMessage = "Something went wrong. Couldn't fetch data.";
export const btnShowMoreContent = 'Full Cast & Crew';
