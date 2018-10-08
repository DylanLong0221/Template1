import React from 'react';

import HeaderItems from './headeritems/links';
import Title from './headeritems/title';


const header = (props) => (
	<header className="Header">
		<Title/>
		<HeaderItems/>
	</header>
	);

export default header;