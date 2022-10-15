import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Landing() {
	return (
		<div id='landing' className='landing_page_container'>
			<div className='inner_landing_wrapper'>
				<div className='landing_content'>
					<h1 className='Landing_title'>Hello, I am Aleksander :)</h1>
					<div>
						<a className='about_me_landing' href='#about' aria-current='page'>
							More about me
						</a>
					</div>
					<div className='landing_content_seperator'></div>
					<div className='landing_navlinks'>
						<a
							className='landing_btn'
							href='https://www.linkedin.com/in/aleksander-spetalen-450013209/'>
							linkedIn
						</a>
						<a className='landing_btn' href='https://github.com/spettenn'>
							gitHub
						</a>
						<button
							className='landing_btn'
							onClick={() =>
								navigator.clipboard.writeText('Aleksanderspetalen@gmail.com')
							}>
							E-mail
						</button>
					</div>
					<div className='landing_arrow_container'>
						<div className='arrow bounce'>
							<a id='landing_down_arrow' href='#about'>
								<FontAwesomeIcon
									icon={faChevronDown}
									size='4x'
									className='landing_arrow_inner'></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
