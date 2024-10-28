import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../../store';

const mockTheme = {
  colors: {
    primary: '#D6535D',
    secondary: '#85CAD4',
    dark: '#1A191C',
    light: '#EAEAEA',
  },
};

function AllProviders({ children }) {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
      </Provider>
    </Router>
  );
}

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
