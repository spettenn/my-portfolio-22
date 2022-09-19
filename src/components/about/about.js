import React from 'react';

function displayAgeYoung() {
	document.getElementById('age').style.backgroundColor = '#C06C8C';
	document.getElementById('age').innerHTML =
		'I was born in oslo (1995), or more spesificly the suburbs. When i was young, me and my family lived abroad for three years. This forced me to learn english at a very young age, and in a sence gave me better oportunities to work with web-development as english has been the default language for the web.' +
		'Going to international school at this age helped give med perspective and recognize that the world we perceve trough our nordic lense is very different then what most people think it is' +
		'At this stage in my life i had allready found my interests when it comes to hobbies and activities. These include fotball, basketball, hiking & snowboarding.';
}
function displayAgeMiddle() {
	document.getElementById('age').style.backgroundColor = '#6C5B7B';
	document.getElementById('age').innerHTML = 'Hello there this is middle age';
}
function displayAgeLate() {
	document.getElementById('age').style.backgroundColor = '#355C7D';
	document.getElementById('age').innerHTML = 'Hello there this is later age';
}

export default function About() {
	return (
		<div id='about' className='about_page_container'>
			<h1>About Page</h1>
			<div className='about_btn_container'>
				<button id='young_age_btn' type='button' onClick={displayAgeYoung}>
					Age 1 - 10
				</button>
				<button id='middle_age_btn' type='button' onClick={displayAgeMiddle}>
					Age 10 - 20
				</button>
				<button id='late_age_btn' type='button' onClick={displayAgeLate}>
					Age 20 - Today
				</button>
			</div>
			<p id='age'>This is default text, lets see if we can change it!</p>
		</div>
	);
}
