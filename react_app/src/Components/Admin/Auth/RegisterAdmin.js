import { Link } from 'react-router-dom';

const RegisterAdmin = () => {
	return (
		<div className="login_page">
			<div className="login_input_form">
				<h1>Register Admin</h1>
				<br />
				<label>Login</label>
				<br />
				<input type="text" />
				<br />
				<label>Password</label>
				<br />
				<input type="text" />
				<br />
				<button className="submit_button">Register</button>
				<br />
				<br />

				<Link to="/admin/login">
					Login
				</Link>

			</div>
		</div>
	);
};

export default RegisterAdmin;