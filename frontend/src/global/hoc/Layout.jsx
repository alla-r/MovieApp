import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const withLayout = (Page) => () => {
  const navigate = useNavigate();

  const PROFILE_DROPDOWN_DATA = [
    {
      content: 'Watchlist',
      onClickHandler: () => navigate('/lists/watchlist'),
    },
    {
      content: 'Favorites',
      onClickHandler: () => navigate('/lists/favorites'),
    },
    {
      content: 'Sign Out',
      onClickHandler: () => {
        console.log('sign out');
      },
    },
  ];

  const HEADER_ITEMS = [
    {
      content: 'Movies',
      path: '/movie',
    },
    {
      content: 'TV Shows',
      path: '/tv',
    },
  ];

  return (
    <div className='page-container'>
      <Header headerItems={HEADER_ITEMS} profileDropdownData={PROFILE_DROPDOWN_DATA} />
      <div className='content-wrap'>
        <Page />
      </div>
      <Footer />
    </div>
  );
};

export default withLayout;
