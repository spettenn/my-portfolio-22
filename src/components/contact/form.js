import React, { useState } from 'react';

const FORM_ENDPOINT = ''; // this is the endpoint

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
	};

	if (submitted) {
		return (
			<>
				<h2>Thank you!</h2>
			</>
		);
	}

	return (
		<form
			action={FORM_ENDPOINT}
			onSubmit={handleSubmit}
			className='contact_form'
			method='POST'
			target='_blank'>
			<div>
				<input
					className='form_input'
					type='text'
					placeholder='Your name'
					name='name'
					required
				/>
			</div>
			<div>
				<input
					className='form_input'
					type='email'
					placeholder='Email'
					name='email'
					required
				/>
			</div>
			<div>
				<textarea
					className='form_input_textarea'
					placeholder='Your message'
					id='message_form'
					name='message'
					required
				/>
			</div>
			<div>
				<button className='form_submit' type='submit'>
					{' '}
					Hit me up :){' '}
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
