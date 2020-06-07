import React from 'react';
import {Link} from 'react-router-dom';


function NavBar(props){
	return (
		<div>
			<ul class="flex justify-between pl-60">
				<li class="mr-3">
					<a class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
						<Link to={'/bestsellers'}> Home </Link>
					</a>	
				</li>
				<li class="mr-3">
					<a class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
						{props.logged_in?
						<Link to={'/dashboard'}>Dashboard</Link>:
						<Link to={'/login'}>Dashboard</Link>}
					</a>
				</li>
				<li class="mr-3">
				
						{props.logged_in? 	<a class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"><p>
							<Link to="/" onClick={props.handleLogout}>Logout</Link>
						</p></a>: null}
					
				</li>
				<li class="mr-3">
					{props.logged_in? null: <a class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"><p>
						<Link to="/signup">Signup</Link>
					</p></a>}
				</li>
				<li class="mr-3">
					{props.logged_in? null: <a class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"><p>
						<Link to="/login">Login</Link>
					</p></a>}
				</li>
			</ul>
		</div>
		)
}

export default NavBar;