import React from 'react';
import {Link} from 'react-router-dom';


function NavBar(props){

	return (
		<div>
			<div>
				<Link to={'/bestsellers'}> Home </Link>
			</div>
			<div>
				<Link to={'/dashboard'}>Dashboard</Link>
			</div>
			{props.logged_in? <p>
				<Link to="/login" onClick={props.handleLogout}>Logout</Link>
			</p>: null}
				{props.logged_in? null: <p>
					<Link to="/signup">Signup</Link>
				</p>}
				{props.logged_in? null: <p>
					<Link to="/login">Login</Link>
				</p>}
		</div>
		)
}

export default NavBar;