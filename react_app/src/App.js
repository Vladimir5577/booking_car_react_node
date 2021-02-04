import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import AdminMain from './Components/Admin/AdminMain';
import LayoutClient from './Components/Client/LayoutClient';

function App() {
  return (
  	<Router>
	    <div className="App">
	    	<Route path="/" exact component={ LayoutClient } />
	     	<Route path="/admin" exact  component={ AdminMain } />
	    </div>
    </Router>
  );
}

export default App;
