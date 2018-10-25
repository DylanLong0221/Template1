import React from 'react';

const people = (props) => (
	<div>
		<div>
			<img src={props.img} alt="People"/>
			<span>{props.Name}<br/></span>
			<span>{props.Job}</span>
		</div>
		<p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
	</div>
);

export default people;