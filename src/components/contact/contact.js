import React from 'react';
import ContactForm from './form';
import me from '../../images/me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FaDiscord, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import Weather from './weather';

export default function Contact() {
	return (
		<div id='contact' className='contact_page_container'>
			<div className='contact_page_content'>
				<div className='contact_info_container'>
					<h4 id='contact_sub_title'>Means to reach me:</h4>
					<button
						className='contact_info_email'
						onClick={() =>
							navigator.clipboard.writeText('Aleksanderspetalen@gmail.com')
						}>
						Aleksanderspetalen@gmail
						<FontAwesomeIcon
							className='copy_email_icon'
							icon={faCopy}
							size='1x'></FontAwesomeIcon>
					</button>
					<img src={me} className='img_me' alt='me' width='150' height='150' />
					<div className='soMe_contact'>
						<h1>
							<FaDiscord
								className='icon_contact'
								onClick={() => navigator.clipboard.writeText('Aleksander#1255')}
							/>
						</h1>
						<a href='https://github.com/spettenn'>
							<h1>
								<FaGithubSquare className='icon_contact' />
							</h1>
						</a>
						<a href='https://www.linkedin.com/in/aleksander-spetalen-450013209/'>
							<h1>
								<FaLinkedin className='icon_contact' />
							</h1>
						</a>
					</div>
					<Weather></Weather>
				</div>
				<div className='contact_form_container'>
					<ContactForm></ContactForm>
				</div>
			</div>
			<div className='contact_page_footer'>
				<div className='footer_start'></div>
				<div className='footer_middle'>
					<p>My own work ofcourse ppc @2022</p>
				</div>
				<div className='footer_end'>
					<a href='#landing'>
						<FontAwesomeIcon
							className='arrow_bottom'
							icon={faArrowUp}></FontAwesomeIcon>
					</a>
				</div>
			</div>
		</div>
	);
}
