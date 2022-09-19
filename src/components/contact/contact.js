import React from 'react';
import ContactForm from './form';
import me from '../../images/me.png';

//import Weather from './weather';

export default function Contact() {
	return (
		<div className='contact_page_container'>
			contact
			<div className='contact_page_content'>
				<div className='contact_info_container'>
					<h4>Means to reach me:</h4>
					<button
						className='contact_info_email'
						onClick={() =>
							navigator.clipboard.writeText('Aleksanderspetalen@gmail.com')
						}>
						Aleksanderspetalen@gmail
					</button>
					<img src={me} className='img_me' alt='me' width='150' height='150' />
				</div>
				<div className='contact_form_container'>
					<ContactForm></ContactForm>
				</div>
			</div>
			{/* <Weather></Weather> */}
		</div>
	);
}
