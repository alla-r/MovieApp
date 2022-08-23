import React from 'react';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider } from 'styled-components';
import InitComponent from './pages/InitComponent';
import theme from './theme';
import './global/styles/index.scss';

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <InitComponent />
    </StyledEngineProvider>
  </ThemeProvider>
);

export default App;
