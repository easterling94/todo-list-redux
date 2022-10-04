import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers/rootReducer';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);