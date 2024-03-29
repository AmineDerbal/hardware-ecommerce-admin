import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import IndexRouter from './IndexRouter';
import store from './redux/store';
import { persistor } from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <IndexRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
