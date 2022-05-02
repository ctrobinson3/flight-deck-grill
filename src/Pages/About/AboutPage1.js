import React from 'react';

const AboutPage1 = ({ next }) => {
	return (
		<div className="story-container">
			<div className="paragraph">
				<p className="abt__p">
					One spring afternoon in March of 2009, we watched the sun set at
					Longmont's Vance Brand Airport. Chad had finished a flight lesson a
					little earlier and he was sharing his adventure with me. While we
					talked, our hunger grew as did our curiosity why there wasn't any food
					services at the airport... ready, Set, GO or as pilots say,
				</p>
				<p className="abt__p clear">
					<b>CLEAR!</b>
				</p>
				<p className="abt__p">
					Flight Deck Grill was launched two months later in May with a small
					street cart. We were anxious to find out if the need for food and
					beverage existed at our airport. The answer was not only yes, but it
					was YES. We learned much, heard great stories and met a lot of new
					friends . As we were getting ready to close up for the season, the
					question asked by all, "Are you coming back in May?". Our response was
					yes, however, we knew we needed to go mastermind our comeback plan.
					Fun season and growth to follow.
				</p>
			</div>
			<div className="abt__button">
				<button type="button" className="button-about" onClick={next}>
					Next
				</button>
			</div>
		</div>
	);
};

export default AboutPage1;
