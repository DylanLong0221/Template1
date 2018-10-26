import React, {Component} from 'react';
// Components
import Header from '../../Header/header';
import Footer from '../../Footer/Footer';
import Service from './Service/Service';
// Pictures
import ProjMan from '../../../Assets/Serv1.png';
import Corp from '../../../Assets/Proj4.png';
import Opera from '../../../Assets/Proj3.png';

class Services extends Component {
	state={

	}

	render(){

		return (
			<div>
				<Header/>
					<div className="ServicesWrap">
						<h1><span>SERVICES</span></h1>
						<div className="Line"/>
						<p className="ServPara">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
						<div className="ServWrap">
							<Service img={ProjMan} title="PROJECT MANAGEMENT"
							para="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers..."
							/>
							<Service img={Corp} title="CCORPORATE STRATEGY"
							para="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers..."
							/>
							<Service img={Opera} title="OPERATIONAL CONSULTING"
							para="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers..."	
						/>
						</div>
					</div>
				<Footer/>
			</div>
			);
		}

} 

export default Services;