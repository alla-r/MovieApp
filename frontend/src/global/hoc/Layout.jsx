import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const PROFILE_DROPDOWN_DATA = [
  {
    content: 'Watchlist',
    onClickHandler: () => {
      console.log('watchlist');
    },
  },
  {
    content: 'Favorites',
    onClickHandler: () => {
      console.log('favorites');
    },
  },
  {
    content: 'Sign Out',
    onClickHandler: () => {
      console.log('sign out');
    },
  },
];

export const HEADER_ITEMS = [
  {
    content: 'Movies',
    path: '/movie',
    // onClickHandler: () => {
    //   console.log('Movies');
    // },
  },
  {
    content: 'TV Shows',
    path: '/tv',
    // onClickHandler: () => {
    //   console.log('TV Shows');
    // },
  },
];

const withLayout = (Page) => () =>
  (
    <>
      <Header headerItems={HEADER_ITEMS} profileDropdownData={PROFILE_DROPDOWN_DATA} />
      <Page />
      <Footer />
    </>
  );

export default withLayout;
