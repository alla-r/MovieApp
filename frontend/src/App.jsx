import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider } from 'styled-components';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import MediaPage from './pages/MediaPage';
import ListPage from './pages/ListPage';
import theme from './theme';
import * as constants from './constants';
import './global/styles/index.scss';

const App = () => {
  axios.defaults.baseURL = constants.BASE_URL;

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:type" element={<MediaPage />} />
          <Route path="/:type/:id" element={<DetailsPage />} />
          <Route path="/lists/:list" element={<ListPage />} />
        </Routes>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default App;
