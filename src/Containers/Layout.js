import React from 'react';
import Header from '../Components/Header/header';
import Pages from '../Components/Pages/Pages';
import Footer from '../Components/Footer/Footer';

const layout = (props) => {


	return (
		<div>
			<Header/>
			<Pages/>
			<Footer/>
		</div>
		);
}

export default layout;

// Should look like when done
// <Header/>
// <Pages/>
// <Footer/>
// with browerser router and links to 
