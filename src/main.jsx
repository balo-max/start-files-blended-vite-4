import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>,
  </Provider>
);
