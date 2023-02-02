import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
// // old store
// import store from './Redux/store';
// import App from './Redux/App';

// rtk store
import store from './RTK/store/store';
import App from './RTK/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);