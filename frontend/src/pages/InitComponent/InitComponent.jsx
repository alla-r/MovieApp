import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import MediaPage from '../MediaPage';
import DetailsPage from '../DetailsPage';
import ListPage from '../ListPage';
import SearchPage from '../SearchPage';
import PersonPage from '../PersonPage';
import * as constants from './constants';
import CustomModal from './components/CustomModal';

const InitComponent = () => {
  axios.defaults.baseURL = constants.BASE_URL;

  return (
    <>
      <CustomModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/:type" element={<LoginPage />} />
        <Route path="/:type" element={<MediaPage />} />
        <Route path="/:type/:id" element={<DetailsPage />} />
        <Route path="/lists/:list" element={<ListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
      </Routes>
    </>
  );
};

export default InitComponent;
