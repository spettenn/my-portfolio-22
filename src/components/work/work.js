import React from 'react';
import prev_project_three from '../../images/prev_project_three.PNG';
import prev_project_two from '../../images/prev_project_two.PNG';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Work() {
	return (
		<div id='work' className='work_page_container'>
			<h2 class='work_page_title'>My previous work</h2>

			<div className='work_page_card'>
				<div className='img_container'>
					<img
						className='card_img'
						src={prev_project_two}
						alt='prev_project_one'
					/>
				</div>
				<div className='card_content'>
					<h3 className='card_title'>Fun 2 Play</h3>
					<p className='card_text'>
						On this project i used NextJS to make an E-comerce website for my
						childhood friend. I tried to keep the website simple, and intuitive
						with a simple order system.
					</p>
					<p className='git_link'>
						gitHub: https://github.com/spettenn/project-examne-final
					</p>
					<a href='https://superlative-sunshine-5a1fb3.netlify.app/'>
						<button className='card_link'>More</button>
					</a>
				</div>
			</div>
			<div className='work_page_card'>
				<div className='img_container'>
					<img
						className='card_img'
						src={prev_project_three}
						alt='prev_project_one'
					/>
				</div>
				<div className='card_content'>
					<h3 className='card_title'>Film blogg</h3>
					<p className='card_text'>
						This was a school project where we made a website for a film blogg.
						The point of the website was to get better at using endpoints and
						scaleing
					</p>
					<p className='git_link'>gitHub repositori:</p>
					<a href='https://unruffled-wescoff-562d65.netlify.app/index.html'>
						<button className='card_link'>More</button>
					</a>
				</div>
			</div>
			<div className='arrow_work bounce'>
				<a id='work_down_arrow' href='#contact'>
					<FontAwesomeIcon
						icon={faChevronDown}
						size='4x'
						className='about_arrow_inner'></FontAwesomeIcon>
				</a>
			</div>
		</div>
	);
}
