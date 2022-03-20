/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export const wrapperWithTheme = (fn, tree) => fn(
  <ThemeProvider theme={theme}>
    {tree}
  </ThemeProvider>
)