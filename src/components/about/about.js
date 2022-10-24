import React, { useState, useEffect, useReducer } from 'react';
import {
	faArrowLeft,
	faArrowRight,
	faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	SliderItem,
	SliderContainer,
	SliderWrapper,
	Navigation,
	NavigationItem,
	ControlLeft,
	ControlRight,
} from './style';

function move() {
	let elemJs = document.getElementById('js-progress-bar');
	let elemReact = document.getElementById('react-progress-bar');
	let elemDom = document.getElementById('dom-progress-bar');
	let elemNext = document.getElementById('next-progress-bar');
	let elemDesign = document.getElementById('design-progress-bar');
	let wrapper = document.getElementById('about-progress-bar');

	const jsSkill = 80;
	const reactSkill = 70;
	const domSkill = 60;
	const nextSkill = 50;
	const designSkill = 40;
	let stepValueJs = 0;
	let stepValueReact = 0;
	let stepValueDom = 0;
	let stepValueNext = 0;
	let stepValueDesign = 0;
	let idJs = setInterval(frameJs, 300);
	let idReact = setInterval(frameReact, 300);
	let idDom = setInterval(frameDom, 300);
	let idNext = setInterval(frameNext, 300);
	let idDesign = setInterval(frameDesign, 300);

	function frameJs() {
		if (stepValueJs >= jsSkill) {
			clearInterval(idJs);
		} else {
			elemJs.style.width = stepValueJs + 5 + '%';
			elemJs.innerHTML = stepValueJs + 5 + '%';
			stepValueJs = stepValueJs + 5;
		}
		move.on('click', function () {
			if (wrapper.css('opacity') === 0) {
				wrapper.css('opacity', 1);
			} else {
				wrapper.css('opacity', 0);
			}
		});
	}
	function frameReact() {
		if (stepValueReact >= reactSkill) {
			clearInterval(idReact);
		} else {
			elemReact.style.width = stepValueReact + 5 + '%';
			elemReact.innerHTML = stepValueReact + 5 + '%';
			stepValueReact = stepValueReact + 5;
		}
	}
	function frameNext() {
		if (stepValueNext >= nextSkill) {
			clearInterval(idNext);
		} else {
			elemNext.style.width = stepValueNext + 5 + '%';
			elemNext.innerHTML = stepValueNext + 5 + '%';
			stepValueNext = stepValueNext + 5;
		}
	}
	function frameDom() {
		if (stepValueDom >= domSkill) {
			clearInterval(idDom);
		} else {
			elemDom.style.width = stepValueDom + 5 + '%';
			elemDom.innerHTML = stepValueDom + 5 + '%';
			stepValueDom = stepValueDom + 5;
		}
	}
	function frameDesign() {
		if (stepValueDesign >= designSkill) {
			clearInterval(idDesign);
		} else {
			elemDesign.style.width = stepValueDesign + 5 + '%';
			elemDesign.innerHTML = stepValueDesign + 5 + '%';
			stepValueDesign = stepValueDesign + 5;
		}
	}
}

const Slider = () => {
	const width = useWindowWidth();
	const [state, dispatch] = useReducer(reducer, {
		currentIndex: 0,
		items: [
			{
				id: 1,
				name: (
					<div className='about_page_one'>
						<p className='about_one_text'>
							Take a look trough my time-line and see where i am at!
						</p>

						<div className='arrow bounce'>
							<a id='about_down_arrow' href='#work'>
								<FontAwesomeIcon
									icon={faChevronDown}
									size='4x'
									className='about_arrow_inner'></FontAwesomeIcon>
							</a>
						</div>
					</div>
				),
			},
			{
				id: 2,
				name: (
					<div className='about_page_two'>
						<h3 className='about_two_title'>Age 1 - 10</h3>
						<p className='about_two_text'>
							I was born in oslo (1995), or more specifically the suburbs. When
							I was young, me and my family lived abroad for three years. This
							forced me to learn english at a very young age, and in a sense
							gave me better opportunities to work with web-development as
							english has been the default language for the web. Going to
							international school at this age helped give med perspective and
							recognize that the world we perceive through our nordic lense is
							very different then what most people think it is. At this stage in
							my life I had already found my interests when it comes to hobbies
							and activities. These include fotball, basketball, hiking &
							snowboarding.
						</p>
					</div>
				),
			},
			{
				id: 3,
				name: (
					<div className='about_page_three'>
						<h3 className='about_three_title'>Age 10 - 20</h3>
						<p className='about_three_text'>
							During my youth I lived in Bærum, Norway. I was a pretty active
							child when I was younger, I continued my hobbies of playing
							football, basketball and snowboarding during the winter. Sadly
							when i was 14 i had to stop with a lot of sport due to a
							snowboarding incident where i hurt my back. This incident changed
							my life and my activities or hobbies had to be put on hold. So the
							next few years were spent in front of the computer, thus giving me
							the opportunity to understand and learn the web. During this time
							I also started to learn how to code, and this is where my interest
							in web-development started to grow. Later in my teens, I finished
							school (high school) and got a job at my old elementary school as
							a substitute teacher.
						</p>
					</div>
				),
			},
			{
				id: 4,
				name: (
					<div className='about_page_four'>
						<h1 className='about_four_title'>Age 20 - Today</h1>
						<p className='about_four_text'>
							In my 20's I started to study in Lillehammer, which is a small
							town north of Oslo. During my time in Lillehammer i was studying
							tourism, this seemed (at the time) like a smart thing to study as
							the tourism industry was thriving in Norway at the time. I then
							finished my studies with a bachelors in marketing & tourism. After
							my studies, I spent a lot of time trying to find a job. I ended up
							having a lot of luck and having the privilege of working in
							Longyearbyen, Svalbard. This sadly did not last, as 4 months after
							I landed the job, covid-19 hit the shores of Norway and the
							country went into lock-down. Thus I had to move back to the
							mainland and start looking for something new to do. After some
							time I realized that the tourism industry was not going to pick
							itself up after the initial covid-19 wave, so I started looking
							for a new trade. At this time I signed up for a frontend
							web-development course for two years in Oslo.
						</p>
					</div>
				),
			},
			{
				id: 5,
				name: (
					<div className='about_page_five'>
						<div className='about_five_container'>
							<div className='about_fiv_left'>
								<h1 className='page_five_title'>
									So, where are my skills at now?
								</h1>
								<p>
									I am currently navigating the vast world of web-development
									and learning new things everyday. I have recently been working
									with a bit of databases using SQL, but not enough that I feel
									I can call myself a database developer. One of the biggest
									challenges for me is to know what specifically to focus on
									when it comes to new languages or frameworks to learn.
								</p>
								<p></p>
							</div>
							<div className='about_five_right'>
								<button id='about_progress_btn' onClick={move}>
									Press me and see where my dev-skills are at!
								</button>
								<p>JavaScript</p>
								<div className='progressbarWrapper'>
									<span id='js-progress-bar'></span>
								</div>
								<p>React</p>
								<div className='progressbarWrapper'>
									<span id='react-progress-bar'></span>
								</div>
								<p>NextJS</p>
								<div className='progressbarWrapper'>
									<span id='next-progress-bar'></span>
								</div>
								<p>HTML / CSS</p>
								<div className='progressbarWrapper'>
									<span id='dom-progress-bar'></span>
								</div>
								<p>Design</p>
								<div className='progressbarWrapper'>
									<span id='design-progress-bar'></span>
								</div>
							</div>
						</div>
						<div className='arrow bounce'>
							<a id='about_down_arrow_last' href='#work'>
								<FontAwesomeIcon
									icon={faChevronDown}
									size='4x'
									className='about_arrow_inner'></FontAwesomeIcon>
							</a>
						</div>
					</div>
				),
			},
		],
	});

	return (
		<div>
			<SliderContainer
				id='about'
				className={'slider-instance'}
				height={'100vh'}>
				<SliderWrapper
					width={width * state.items.length}
					style={{
						transform: `translateX(${-(state.currentIndex * width)}px)`,
						transition: 'transform ease-out 0.30s',
						width: width * state.items.length + 'px',
					}}>
					{state.items.map((i, index) => {
						return (
							<Slide
								key={i.id}
								last={index === state.items.length - 1}
								index={index}
								item={i}
								dispatch={dispatch}
								snap={state.snap}
								width={width}
							/>
						);
					})}
				</SliderWrapper>

				<Navigation>
					{state.items.map((i, index) => {
						return (
							<NavigationItem
								active={index === state.currentIndex}
								onClick={() => dispatch({ type: 'GOTO', index })}
								key={'nav' + i.id}>
								&nbsp;
							</NavigationItem>
						);
					})}
				</Navigation>
				<div className='about_nav_container'>
					{state.currentIndex > 0 && (
						<ControlLeft
							className='nav_btn_about'
							onClick={() => dispatch({ type: 'PREV' })}>
							<FontAwesomeIcon size='3x' icon={faArrowLeft}></FontAwesomeIcon>
						</ControlLeft>
					)}

					{state.currentIndex < state.items.length - 1 && (
						<ControlRight
							className='nav_btn_about'
							onClick={() => dispatch({ type: 'NEXT' })}>
							<FontAwesomeIcon size='3x' icon={faArrowRight}></FontAwesomeIcon>
						</ControlRight>
					)}
				</div>
			</SliderContainer>
		</div>
	);
};

function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
	return width;
}

function reducer(state, action) {
	switch (action.type) {
		case 'NEXT':
			return {
				...state,
				currentIndex: state.currentIndex + (1 % state.items.length),
			};
		case 'PREV':
			return {
				...state,
				currentIndex: state.currentIndex - (1 % state.items.length),
			};
		case 'GOTO':
			return {
				...state,
				currentIndex: action.index,
			};
		case 'RESET':
			return { currentIndex: 0, currentPosition: 0 };

		default:
			return state;
	}
}

const Slide = ({ item, width }) => {
	return (
		<SliderItem width={width}>
			<div className='about_container'>{item.name}</div>
		</SliderItem>
	);
};

export default Slider;
