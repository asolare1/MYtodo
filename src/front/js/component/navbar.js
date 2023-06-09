import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light layout">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">My Todo</span>
				</Link>
				<div className="ml-auto">
				<Link to={"/signup"}>
				<button className="btn btn-primary">Sign up</button>
				</Link>
				<Link to={"/login"}>
				<button className="btn btn-primary">Log In</button>
				</Link>	
				
				
					
				</div>
			</div>
		</nav>
	);
};
