import React from 'react';

const service = (props) => (
	<div>
		<img src={props.img} alt="Service"/>
		<h4>{props.title}</h4>
		<p>{props.para} <a href="/">Learn More</a></p>
		<span>1 hr</span>
		<a href="/">Book Now</a>
	</div>
	);

export default service;