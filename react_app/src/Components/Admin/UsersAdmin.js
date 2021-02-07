import { useParams } from 'react-router-dom';
 
const UsersAdmin = () => {

	const { cars } = useParams();

	return (
		<div>
			<h1>Users Page</h1>
			<h1>{ cars }</h1>
		</div>
	);
}

export default UsersAdmin;