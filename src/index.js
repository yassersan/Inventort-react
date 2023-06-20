import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import App from './App';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension' 

const store = createStore(reducer, applyMiddleware(thunk));




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);


export default store;