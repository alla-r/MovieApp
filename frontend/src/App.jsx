import React from 'react';
import axios from 'axios';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider } from 'styled-components';
import HomePage from './pages/HomePage';
import theme from './theme';
import * as constants from './constants';
import './global/styles/index.scss';

const App = () => {
  axios.defaults.baseURL = constants.BASE_URL;
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <HomePage />
      </StyledEngineProvider>
    </ThemeProvider>
  );
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
