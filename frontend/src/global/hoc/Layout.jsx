/* eslint-disable react/function-component-definition */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAuthContext } from './AuthContextProvider';

const withLayout = (Page) => () => {
  const navigate = useNavigate();
  const auth = useAuthContext();
  const { t } = useTranslation();

  const PROFILE_DROPDOWN_DATA = [
    {
      content: t('watchlist'),
      path: '/lists/watchlist',
      onClickHandler: () => navigate('/lists/watchlist'),
    },
    {
      content: t('favorites'),
      path: '/lists/favorites',
      onClickHandler: () => navigate('/lists/favorites'),
    },
    {
      content: t('ratings'),
      path: '/lists/rate',
      onClickHandler: () => navigate('/lists/rate'),
    },
    {
      content: t('logout'),
      onClickHandler: () => auth.logout(true),
    },
  ];

  const HEADER_ITEMS = [
    {
      content: t('movies'),
      path: '/movie',
    },
    {
      content: t('tvShows'),
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
