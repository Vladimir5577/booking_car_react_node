import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
// auth components
import LoginAdmin from './Components/Admin/Auth/LoginAdmin';
import RegisterAdmin from './Components/Admin/Auth/RegisterAdmin';
// admin panel components
import LayoutAdmin from './Components/Admin/LayoutAdmin';
import CarsAdmin from './Components/Admin/CarsAdmin';
import UsersAdmin from './Components/Admin/UsersAdmin';
import OrdersAdmin from './Components/Admin/OrdersAdmin';
import ContactsAdmin from './Components/Admin/ContactsAdmin';


function App() {
  return (
  	<Router>
	    <div className="App">
		    <Switch>
		    	<Route path="/" exact component={ LoginAdmin } />
		     	<Route path="/admin/register" exact component={ RegisterAdmin } />
		     	<Route path="/admin" component={ LayoutAdmin } />
		     </Switch>
	    </div>
    </Router>
  );
}

export default App;
