import React from 'react';
import './About.css';
import pic1 from '../img/ma-plane.jpg';
import AboutPageIndex from './About/AboutPageIndex';

function About() {
	return (
		<div className="about__container">
			<header>
				<h1 className="about__h1">Our Story</h1>
				<div className="about__story-container">
					<div className="story">
						<AboutPageIndex />
					</div>
					<div className="story-image">
						<img className="story-pic" src={pic1} />
					</div>
				</div>
			</header>
		</div>
	);
}

export default About;
