import { Link } from 'react-router-dom';

const LoginClient = () => {


	return (
	<div className="login_client">
		<div className="input_group">
			<h1>LoginClient Page</h1>
			<br />
			<label>Username</label>
			<br />
			<input type="text" />
			<br />
			<label>Password</label>
			<br />
			<input type="text"/>
			<br />
			<button>Login</button>
			<br />
			<p>Don't have an account</p>
			<Link to="/register">Register</Link>
		</div>
	</div>

	);
};

export default LoginClient;