import React from 'react';

const service = (props) => (
	<div className="ServiceHolder">
		<img src={props.img} alt="Service"/>
		<h4 style={{
			paddingTop:"50px", lineSpacing: "5px", fontSize: "1.3em", width:"240px", paddingLeft:"40px", color: "#3D84B6"
		}}>{props.title}</h4>
		<p style={{display:"none"}}>{props.para} <a href="/">Learn More</a></p>
		<p style={{marginTop:"30px", paddingBottom: "40px", color: "#4D95C8"}}>1 hr</p>
		<a className="BookNow" href="/">Book Now</a>
	</div>
	);

export default service;