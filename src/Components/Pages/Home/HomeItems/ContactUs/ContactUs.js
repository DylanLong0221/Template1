import React from 'react';

const contactUs = () => (
	<div id="contact" className="contactUsWrap">
		<h3>CONTACT US</h3>
		<p>500 Terry Francois Street, </p>
		<p>San Francisco, CA 94158</p>
		<a className="A" href="/">info@mysite.com</a>
		<p>Tel: 123-456-7890</p>
		<div className="FormWrap">
			<form>
				<input type="text" placeholder="Name" name="Name" />
				<input type="text" placeholder="Email" name="Email" />
				<input type="text" placeholder="Subject" name="Subject" />
				<textarea name="comment" placeholder="Type your message here..."/>
				<button type="submit" className="FormBut" value="Submit">Submit</button>
			</form>
		</div>
		<iframe 
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.136396240939!2d-122.3905456723602!3d37.76801740591617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fc5dc7b9e05%3A0xa7bbcec73b6cbbae!2sLot+E%2C+1725+3rd+St%2C+San+Francisco%2C+CA+94158!5e0!3m2!1sen!2sus!4v1539048000383" 
		width="485" 
		height="470" 
		frameborder="0" 
		style={{border:"0"}} allowfullscreen></iframe>
	</div>
	);

export default contactUs;