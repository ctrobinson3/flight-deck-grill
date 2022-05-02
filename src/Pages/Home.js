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
			<About />
		</div>
	);
};

export default Home;
