import React from 'react';
import facebook from '../../Assets/facebook.png';
import twitter from '../../Assets/twitter.png';
import google from '../../Assets/google.png';

const footer = () => (
	<div className="FooterWrapper">
		<p>duplicate of © 2023 by James Consulting. Proudly created with Wix.com<br/><a className="b" href="https://bit.ly/2Ca5uUm">VIEW OWNER AND DESIGNER</a></p>
		<a href="/"><img src={facebook} alt="link to facebook"/></a>
		<a href="/"><img src={twitter} alt="link to twitter"/></a>
		<a href="/"><img src={google} alt="link to google"/></a>
	</div>
	);

export default footer;