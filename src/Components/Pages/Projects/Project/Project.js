import React from 'react';

const project = (props) => (
		<div className="ProWrap">
			<img src={props.img} alt="ProjPic"/>
			<h4>{props.title}</h4>
			<p>{props.para}</p>
		</div>
	);

export default project;