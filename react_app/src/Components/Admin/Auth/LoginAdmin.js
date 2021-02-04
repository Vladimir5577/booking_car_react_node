import { Link } from 'react-router-dom';

const LoginAdmin = () => {
	return (
		<div className="login_page">
			<div className="login_input_form">
				<h1>Admin Login</h1>
				<br />
				<label>Login</label>
				<br />
				<input type="text" />
				<br />
				<label>Password</label>
				<br />
				<input type="text" />
				<br />
				<button className="submit_button">Login</button>
				<br />
				<br />

				<Link to="/admin/register">
					Register
				</Link>
			
			</div>
		</div>
	);
};

export default LoginAdmin;