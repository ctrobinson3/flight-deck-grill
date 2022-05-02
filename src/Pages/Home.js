import React from 'react';
import About from './About';
import Top from './Top';
import './Home.css';

const Home = () => {
	return (
		<div className="main__div">
			<div className="top__div">
				<Top />
			</div>
			<div className="about__div">
				<About />
			</div>
		</div>
	);
};

export default Home;
