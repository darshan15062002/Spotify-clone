import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SearchContextProvider } from './context/SearchContext';
import reducer, { initialState } from './reducer/reducer';
import { StateProvider } from './StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <AuthContextProvider>
        <SearchContextProvider>

          <App />

        </SearchContextProvider>
      </AuthContextProvider>
    </StateProvider >
  </React.StrictMode>
);

