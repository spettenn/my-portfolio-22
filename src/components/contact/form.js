import React, { useState } from 'react';
import chuck from '../../images/cuck_norris.jpg';

const FORM_ENDPOINT =
	'https://public.herotofu.com/v1/c4dec080-5f6d-11ed-b82c-5d75eaa7ccff'; // this is the endpoint hosted on herotofu.com

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
	};

	if (submitted) {
		return (
			<img
				id='chuck_submit_img'
				alt='This is suposed to be a chuck norris meme'
				src={chuck}
			/>
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
					placeholder='E-mail'
					name='email'
					required
				/>
			</div>
			<div>
				<textarea
					className='form_input_textarea'
					placeholder='Your message'
					type='text'
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
