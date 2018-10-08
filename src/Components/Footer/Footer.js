import React from 'react';
import facebook from '../../Assets/facebook.png';
import twitter from '../../Assets/twitter.png';
import google from '../../Assets/google.png';

const footer = () => (
	<div className="FooterWrapper">
		<p>duplicate of © 2023 by James Consulting. Proudly created with Wix.com</p>
		<img src={facebook} alt="facebook"/>
		<img src={twitter} alt="facebook"/>
		<img src={google} alt="facebook"/>
	</div>
	);

export default footer;