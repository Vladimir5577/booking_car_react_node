import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import AdminMain from './Components/Admin/AdminMain';
import LayoutClient from './Components/Client/LayoutClient';
import LoginAdmin from './Components/Admin/Auth/LoginAdmin';
import RegisterAdmin from './Components/Admin/Auth/RegisterAdmin';

function App() {
  return (
  	<Router>
	    <div className="App">
	    	<Route path="/" exact component={ LayoutClient } />
	     	<Route path="/admin" exact  component={ AdminMain } />
	     	<Route path="/admin/login" component={ LoginAdmin } />
	     	<Route path="/admin/register" component={ RegisterAdmin } />
	    </div>
    </Router>
  );
}

export default App;
