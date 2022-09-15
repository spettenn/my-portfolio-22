import React from 'react';

export default function Landing() {
	return (
		<div className='landing_page_container'>
			<div className='inner_landing_wrapper'>
				<div className='landing_content'>
					<h1 className='Landing_title'>Hello, I am Aleksander :)</h1>
					<div class='btn-group my-5'>
						<a className='about_me_landing' href='#' aria-current='page'>
							More about me
						</a>
					</div>
					<div className='landing_content_seperator'></div>
					<div className='landing_navlinks'>
						<a className='landing_btn' href='#'>
							linkedIn
						</a>
						<a className='landing_btn' href='#'>
							gitHub
						</a>
						<a className='landing_btn' href='#'>
							E-mail
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
