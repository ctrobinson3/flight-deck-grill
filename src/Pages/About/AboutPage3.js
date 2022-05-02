import React from 'react';

const AboutPage3 = ({ back }) => {
	return (
		<div className="story-container">
			<div className="paragraph">
				<p className="abt__p">
					It's hard to believe Season 14 starts on May 4, 2022. Our re-openings
					always promise a fantastic turnout with a wonderful warm welcome.
					What's next, brick & mortar? 2020 could be an exciting year of change
					for Flight Deck Grill…. so stay tuned.{' '}
				</p>
				<p className="abt__p">
					Have fun when you visit. We encourage you to try something different
					each time and share your favorites with friends. We'd love to hear
					your ideas or feedback.{' '}
				</p>
				<p className="abt__p">
					Sooooooo…..our motto, when the fun ends, we're going home.{' '}
				</p>
				<p className="abt__p">Here's to the fun never ending! </p>
				<p className="abt__p">Dian & Chad Rennicke</p>
			</div>
			<div className="abt__button">
				<button type="button" className="button-about" onClick={back}>
					Back
				</button>
			</div>
		</div>
	);
};

export default AboutPage3;
