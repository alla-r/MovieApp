import React from 'react';
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import MediaPage from '../MediaPage';
import DetailsPage from '../DetailsPage';
import ListPage from '../ListPage';
import SearchPage from '../SearchPage';
import PersonPage from '../PersonPage';
import * as constants from './constants';
import CustomModal from './components/CustomModal';
import { useAuthContext } from '../../utils/hoc/AuthContextProvider';
import 'react-toastify/dist/ReactToastify.css';

function ProtectedRoute({ children }) {
  const auth = useAuthContext();
  const isUserAuthorized = !!auth.user;

  return isUserAuthorized ? children : <Navigate to="/auth/login" />;
}

function InitComponent() {
  axios.defaults.baseURL = constants.BASE_URL;

  return (
    <>
      <CustomModal />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/:type" element={<LoginPage />} />
        <Route path="/:type" element={<MediaPage />} />
        <Route path="/:type/:id" element={<DetailsPage />} />

        <Route
          path="/lists/:list"
          element={
            <ProtectedRoute>
              <ListPage />
            </ProtectedRoute>
          }
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
      </Routes>
    </>
  );
}

export default InitComponent;
