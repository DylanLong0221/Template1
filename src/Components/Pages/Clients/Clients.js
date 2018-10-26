import React from 'react';
// Components
import Header from '../../Header/header';
import Footer from '../../Footer/Footer';
// Images
import Logo1 from '../../../Assets/Clients1.png';
import Logo2 from '../../../Assets/Clients2.png';
import Logo3 from '../../../Assets/Clients3.png';
import Logo4 from '../../../Assets/Clients4.png';
import Logo5 from '../../../Assets/Clients5.png';
import Logo6 from '../../../Assets/Clients6.png';

const clients = () => (
	<div>
		<Header/>
		<div className="ClientPageWrap">
			<h1><span>CLIENTS</span></h1>
			<div className="Line"/>
			<p className="ClientPara">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
			<div className="Line1">
			<img src={Logo1} alt="Clients"/>
			<img src={Logo2} alt="Clients"/>
			<img src={Logo3} alt="Clients"/>
			</div>
			<div className="Line2">
			<img src={Logo4} alt="Clients"/>
			<img src={Logo5} alt="Clients"/>
			<img src={Logo6} alt="Clients"/>
			</div>
			<div className="ClientsBox">
				<p>“I'm a testimonial. Click me to edit and add text that says something nice about you and your services. Click me to edit and add text that says something nice about you and your services.”</p>
			</div>
			<div className="ArrowDiv"></div>
			<p className="Sam">Samantha Jones, Project Manager</p>
		</div>
		<Footer/>
	</div>
	);

export default clients;