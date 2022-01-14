import React from 'react';
import axios from 'axios';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import HomePage from './pages/HomePage';
import theme from './theme';
import * as constants from './constants';
import './global/styles/index.scss';


const PROFILE_DROPDOWN_DATA = [
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

const HEADER_ITEMS = [
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

const App = () => {
  axios.defaults.baseURL = constants.BASE_URL;
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <HomePage />
      </StyledEngineProvider>
    </ThemeProvider>
  )
};

export default App;

/* 

<Router>
  <Switch>
    <StyledEngineProvider injectFirst>
      <InitComponent />
    </StyledEngineProvider>
  </Switch>
</Router>

*/
