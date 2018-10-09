import React from 'react';
import { Link } from 'react-router-dom';

const links = (props) => (
	<div>
		<ul className="Unordered">
			<li><Link className="to" to="/about">About</Link></li>
			<li><Link className="to" to="/services">Services</Link></li>	
			<li><Link className="to" to="/projects">Projects</Link></li>	
			<li><Link className="to" to="/clients">Clients</Link></li>	
			<li><a href="/#contact">Contact</a></li>	
		</ul>
	</div>
	);

export default links;