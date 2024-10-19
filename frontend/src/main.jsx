import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { ScrollToTop } from './utils/helpers';
import { AuthProvider } from './utils/hoc/AuthContextProvider';
import App from './App';
import store from './store';
import './utils/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </Provider>,
);
