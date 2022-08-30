import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import MediaPage from '../MediaPage';
import DetailsPage from '../DetailsPage';
import ListPage from '../ListPage';
import SearchPage from '../SearchPage';
import * as constants from './constants';
import CustomModal from './components/CustomModal';

const InitComponent = () => {
  axios.defaults.baseURL = constants.BASE_URL;

  return (
    <>
      <CustomModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:type" element={<MediaPage />} />
        <Route path="/:type/:id" element={<DetailsPage />} />
        <Route path="/lists/:list" element={<ListPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default InitComponent;
