import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
const App = lazy(() => import('./App'));
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback='loading...'>
        <App />
        <Toaster
          toastOptions={{
            position: 'top-right',
            style: {
              backgroundColor: '#283046',
              color: '#FFFFFF',
            },
          }}
        />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
