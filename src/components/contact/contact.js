import React from 'react';
import ContactForm from './form';

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
					<img src='#' alt='me' />
				</div>
				<div className='contact_form_container'>
					<ContactForm></ContactForm>
				</div>
			</div>
			{/* <Weather></Weather> */}
		</div>
	);
}
