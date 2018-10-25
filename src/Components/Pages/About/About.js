import React from 'react';
import Header from '../../Header/header';
import Footer from '../../Footer/Footer';
import People from './AboutPage/People';
// images for people
import James from '../../../Assets/pic1.png';
import Samantha from '../../../Assets/pic2.png';
import Kim from '../../../Assets/pic3.png';
import Trevor from '../../../Assets/pic4.png';


const about = () => (
	<div>
		<Header/>
		<div className="AboutWrap">
			<h1><span>ABOUT</span></h1>
			<hr/>
			<p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
			<People img={James} Name="James Johnson" Job="Founder and Principal"/>
			<People img={Samantha} Name="Samantha Jones" Job="Project Manager"/>
			<People img={Kim} Name="Kim Bailey" Job="VP Marketing"/>
			<People img={Trevor} Name="Trevor Sinclair" Job="VP Accounts"/>
		</div>
		<Footer/>
	</div>
	);

export default about;