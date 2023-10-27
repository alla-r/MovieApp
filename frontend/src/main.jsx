// import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { ScrollToTop } from './global/helpers';
import { AuthProvider } from './global/hoc/AuthContextProvider';
import App from './App.jsx';
import store from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
);
