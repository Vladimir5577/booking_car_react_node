import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Css
import './css/1_main.css';
import './css/2_admin_login.css';
import './css/3_admin.css';
import './css/4_client.css';
import './css/5_client_main.css';
import './css/6_contacts_client.css';

// auth components
import LoginAdmin from './Components/Admin/Auth/LoginAdmin';
// import RegisterAdmin from './Components/Admin/Auth/RegisterAdmin';
// import SecureRoute from './Components/Admin/Auth/SecureRoute';
import ProtectedRoute from './Components/Admin/Auth/ProtectedRoute';

// admin panel
import LayoutAdmin from './Components/Admin/LayoutAdmin';

// Client 
import LayoutClient from './Components/Client/LayoutClient';


function App() {

	const [loginStatus, setLoginStatus] = useState(false);

	useEffect(() => {
		const checkLogin = () => {
			const authResponse = axios.get('http://localhost:3001/admin/auth/verify_token', {
				headers: {
					'x-access-token': localStorage.getItem('token')
				}
			}).then((response) => {
				console.log(response.data.auth, 'auth from Promise');
				setLoginStatus(response.data.auth);
			});

			console.log(authResponse, 'auth response');
		};

		checkLogin();
	}, []);


  return (
  	<Router>
	    <div className="App">
		    <Switch>
		    	<Route path="/" exact component={ LayoutClient } />
		     	{/*<SecureRoute path="/admin" component={ LayoutAdmin } />*/}
		     	<Route path="/admin/login" component={ () => <LoginAdmin loginStatus={loginStatus} setLoginStatus={setLoginStatus}  /> } />
		     	<Route exect path="/admin" component={ () => <LayoutAdmin loginStatus={loginStatus} setLoginStatus={setLoginStatus} /> } />
		     	{/* Protected adimin route not good */}
		     	{/*<ProtectedRoute path="/admin" component={ LayoutAdmin } isAuth={ loginStatus } />*/}
		     </Switch>
	    </div>
    </Router>
  );
}

export default App;
