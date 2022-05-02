import React from 'react';

const AboutPage2 = ({ next, back }) => {
	return (
		<div className="story-container">
			<div className="paragraph">
				<p className="abt__p">
					Over the winter we researched and built a custom mobile grill, aka,
					our rigstaurant, Tinker. 2010, Season 2, our sales doubled, but that
					was easy with the small sales we had in our first year. This was our
					year to learn how to operate our rig and play in the event arena.
				</p>
				<p className="abt__p">
					2011, Season 3, better and smarter and knowing how to have more fun.
					Jammed packed with new events, invites back to those events from the
					previous year, AND expanded our business to include Catering. We have
					many loyal customers and our set of friends keeps growing. We love new
					faces coming into visit us and appreciating what the airport has to
					offer. The last week of our season in October we made our last payment
					on the business. Wonderful feeling and confirmation that we are doing
					it right.
				</p>
			</div>
			<div className="abt__button">
				<button type="button" className="button-about" onClick={back}>
					Back
				</button>
				<button type="button" className="button-about" onClick={next}>
					Next
				</button>
			</div>
		</div>
	);
};

export default AboutPage2;
