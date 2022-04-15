import React, { useState } from 'react'
import './Pages.css'
import pic from '../img/ma.jpg'

export default function Home() {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    if (modal) {
        document.body.classList.add('active-modal')
    } else {

        document.body.classList.remove('active-modal')
    }

    return (
        <div className='home'>
            <div className='home__div'>
                <div className='home__motto'>
                    <h1 className='home__text top'>Outdoors</h1>
                    <h1 className='home__text middle'>and in</h1>
                    <h1 className='home__text plane'>Plane</h1>
                    <h1 className='home__text bottom'>View</h1>
                    <h1 className='home__text dotted'>........</h1>
                </div>
                <div className='home__pic'>
                    <img className='home__img' src={pic} />
                </div>
            </div>
            <div className='home__div-buttons'>
                <div className='buttons-top'>
                    <button type='button' className='home-button' onClick={toggleModal}>Breakfast</button>
                    <button type='button' className='home-button'>Lunch</button>
                </div>
                <div className='buttons-bottom'>
                    <button type='button' className='home-button'>Extras</button>
                    <button type='button' className='home-button'>Experimentals</button>
                </div>
            </div>
            {modal && (
                <div className='modal'>
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <h1>Breakfast</h1>
                        <h2>7:30 am - 11:00 am</h2>
                        <p>Top Gun Burrito - Not your average burrito…Hearty… try. Chorizo, potato, egg, cheddar & medium green chili.</p>
                        <p>Middle Seat - Been there! Your choice of sausage or bacon, egg, & cheddar packed in a kaiser roll.</p>
                        <p>Weight & Balance - 2 egg scramble with extra love and choice of Sausage or Bacon</p>
                        {/* Enter List Info Here */}
                        <button
                            type="button"
                            className="close-modal"
                            onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}
