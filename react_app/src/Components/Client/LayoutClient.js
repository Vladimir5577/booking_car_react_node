import ContentClient from './ContentClient';

const LayoutClient = () => {
	return (
		<div>
			<div className="header">
				<div className="container">
					<h1>Booking Car Web Site</h1>
					<div className="auth_block">
						<button className="auth_user_button">Login</button>
						<button className="auth_user_button">Register</button>
					</div>
				</div>
			</div>
			<div className="body">
				<div className="container">
					<h1>On our web site you can rent any awailable car</h1>
					<ContentClient />
				</div>
			</div>
		</div>
	);
};

export default LayoutClient;