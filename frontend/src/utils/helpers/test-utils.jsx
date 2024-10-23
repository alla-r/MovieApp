import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const mockTheme = {
  colors: {
    primary: '#D6535D',
    secondary: '#85CAD4',
    dark: '#1A191C',
    light: '#EAEAEA',
  },
};

function AllProviders({ children }) {
  return <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>;
}

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
