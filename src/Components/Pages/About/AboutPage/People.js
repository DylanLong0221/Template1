import React from 'react';

const people = (props) => (
	<div>
		<div>
			<div className="AboutBg">
			<img src={props.img} alt="People"/>
			<p className="AboutName"><span>{props.Name}<br/>{props.Job}</span></p>
			</div>
		</div>
		<p className="Aboutpg">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
	</div>
);

export default people;