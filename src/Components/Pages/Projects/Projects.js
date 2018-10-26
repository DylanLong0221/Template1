import React from 'react';
// Components
import Header from '../../Header/header';
import Footer from '../../Footer/Footer';
import Project from './Project/Project';
// Images
import Proj1 from '../../../Assets/Proj1.png';
import Proj2 from '../../../Assets/Proj2.png';
import Proj3 from '../../../Assets/Projects1.png';
import Proj4 from '../../../Assets/Projects2.png';

const projects = () => (
	<div>
		<Header/>
			<div className="ProjPageWrap">
				<h1><span>PROJECTS</span></h1>
				<div className="Line"></div>
				<Project img={Proj1} title="PROJECT 1" para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." />
				<Project img={Proj2} title="PROJECT 2" para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." />
				<Project img={Proj3} title="PROJECT 3" para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." />
				<Project img={Proj4} title="PROJECT 4" para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you." />
			</div>
		<Footer/>
	</div>
	);

export default projects;
