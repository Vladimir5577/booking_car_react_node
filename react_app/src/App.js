import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
// auth components
import LoginAdmin from './Components/Admin/Auth/LoginAdmin';
import RegisterAdmin from './Components/Admin/Auth/RegisterAdmin';
import SecureRoute from './Components/Admin/Auth/SecureRoute';
import ProtectedRoute from './Components/Admin/Auth/ProtectedRoute';

// admin panel
import LayoutAdmin from './Components/Admin/LayoutAdmin';

// Client 
import LayoutClient from './Components/Client/LayoutClient';


function App() {

	const [loginStatus, setLoginStatus] = useState(true);

	// const checkLogin = () => {
	// 	axios.get('http://localhost:3001/admin/auth/verify_token', {
	// 		headers: {
	// 			'x-access-token': localStorage.getItem('token')
	// 		}
	// 	}).then((response) => {
	// 		console.log(response.data.auth, 'auth from Promise');
	// 		setLoginStatus(response.data.auth);
	// 	});
	// };

	// checkLogin();

console.log(loginStatus, 'bla');


  return (
  	<Router>
	    <div className="App">
		    <Switch>
		    	<Route path="/" exact component={ LayoutClient } />
		     	<Route path="/admin/register" exact component={ RegisterAdmin } />
		     	{/*<SecureRoute path="/admin" component={ LayoutAdmin } />*/}
		     	<ProtectedRoute path="/admin" component={ LayoutAdmin } isAuth={ loginStatus } />
		     </Switch>
	    </div>
    </Router>
  );
}

export default App;
