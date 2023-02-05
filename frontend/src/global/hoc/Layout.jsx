import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAuthContext } from './AuthContextProvider';

const withLayout = (Page) => () => {
  const navigate = useNavigate();
  const auth = useAuthContext();

  const PROFILE_DROPDOWN_DATA = [
    {
      content: 'Watchlist',
      path: '/lists/watchlist',
      onClickHandler: () => navigate('/lists/watchlist'),
    },
    {
      content: 'Favorites',
      path: '/lists/favorites',
      onClickHandler: () => navigate('/lists/favorites'),
    },
    {
      content: 'Ratings',
      path: '/lists/rate',
      onClickHandler: () => navigate('/lists/rate'),
    },
    {
      content: 'Sign Out',
      onClickHandler: () => {
        console.log('sign out');
        auth.signOut();
        navigate("/");
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
    <div className="page-container">
      <Header 
        headerItems={HEADER_ITEMS} 
        profileDropdownData={PROFILE_DROPDOWN_DATA}
        isUserAuthorized={!!auth.user}
      />
      <div className="content-wrap">
        <Page />
      </div>
      <Footer />
    </div>
  );
};

export default withLayout;
