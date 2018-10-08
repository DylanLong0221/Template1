import React from 'react';
import ColItem from './ColItem';

const collums = (props) => (
	<div className="ColWrap">	
		<ColItem 
		title='SERVICES'
		par="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
		/>
		<ColItem 
		title='PROJECTS'
		par="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
		/>
		<ColItem 
		title="CLIENTS"
		par="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
		/>
	</div>

	);

export default collums;