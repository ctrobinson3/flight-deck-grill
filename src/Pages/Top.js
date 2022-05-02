import React, { useState } from 'react';
import './Pages.css';
import pic from '../img/ma.jpg';

export default function Home() {
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};
	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<div className="home__container">
			<div className="hours__div">
				<header className="hours__header">
					<h1>Hours:</h1>
				</header>
				<div className="hours__content">
					<p>Wednesday - Sunday: 7:30am - 2:00pm</p>
					<p>(Weather Permitting, visit us on Facebook if questionable)</p>
					<p>Catering year round!</p>
					<p>
						Let us help with your next event. We'll make it as fun or formal as
						you wish!
					</p>
				</div>
			</div>
			<div className="home">
				<div className="home__div">
					<div className="home__motto">
						<h1 className="home__text top">Outdoors</h1>
						<h1 className="home__text middle">and in</h1>
						<h1 className="home__text plane">Plane</h1>
						<h1 className="home__text bottom">View</h1>
						<h1 className="home__text dotted">........</h1>
					</div>
					<div className="home__pic">
						<img className="home__img" src={pic} />
					</div>
				</div>
				<div className="home__div-buttons">
					<div className="buttons-top">
						<button type="button" className="home-button" onClick={toggleModal}>
							Breakfast
						</button>
						<button type="button" className="home-button">
							Lunch
						</button>
					</div>
					<div className="buttons-bottom">
						<button type="button" className="home-button">
							Extras
						</button>
						<button type="button" className="home-button">
							Experimentals
						</button>
					</div>
				</div>
				{modal && (
					<div className="modal">
						<div className="overlay"></div>
						<div className="modal-content">
							<h1>Breakfast</h1>
							<h2>7:30 am - 11:00 am</h2>
							<p>
								Top Gun Burrito - Not your average burrito…Hearty… try. Chorizo,
								potato, egg, cheddar & medium green chili.
							</p>
							<p>
								Middle Seat - Been there! Your choice of sausage or bacon, egg,
								& cheddar packed in a kaiser roll.
							</p>
							<p>
								Weight & Balance - 2 egg scramble with extra love and choice of
								Sausage or Bacon
							</p>
							{/* Enter List Info Here */}
							<button
								type="button"
								className="close-modal"
								onClick={toggleModal}
							>
								Close
							</button>
						</div>
					</div>
				)}
			</div>
			<div className="contact__div">
				<header className="hours__header">
					<h1>Contact:</h1>
				</header>
				<div className="hours__content">
					<div className="contact__form">
						<label>Name:</label>
						<input></input>
						<label>Email:</label>
						<input></input>
						<label>Subject:</label>
						<input></input>
						<label>Message:</label>
						<input></input>
						<p>Please type the code you see on the left.</p>
						<p>**Captcha**</p>
						<button>Submit</button>
					</div>
					<p>Phone: (303)682-8888</p>
					<p>Located just west of Elite Aviation @ Vance Brand Airport</p>
					<p>229 Airport Road, Longmont, CO 80503</p>
					<p>We Accept Paper or Plastic</p>
				</div>
			</div>
		</div>
	);
}
