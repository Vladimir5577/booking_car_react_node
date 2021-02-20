import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import authVerifyAdmin from './Components/Admin/Auth/AuthVerifyAdmin';

const allReducers = combineReducers({
	authVerifyAdmin: authVerifyAdmin 
});



const store = createStore(() => 123);

// console.log(authVerifyAdmin(), '-----------------+');



ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
