import React from 'react';

function displayAgeYoung() {
	document.getElementById('age').innerHTML = 'Hello there this is young age';
}
function displayAgeMiddle() {
	document.getElementById('age').innerHTML = 'Hello there this is middle age';
}
function displayAgeLate() {
	document.getElementById('age').innerHTML = 'Hello there this is later age';
}

export default function About() {
	return (
		<div className='about_page_container'>
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
