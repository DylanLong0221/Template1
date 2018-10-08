import React from 'react';

const colItem = (props) => (
	<div className="Block">
		<h3 className="Serv">{props.title}</h3>
		<p className="ImAPar">{props.par}</p>
		<a href='/' className="MoreInfo">More Info</a>
	</div>

	);

export default colItem;