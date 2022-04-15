import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../img/fdgblack-2.png'
import header from '../../img/FDGhead.png'
import { FaBars, FaTimes, FaFacebookSquare } from 'react-icons/fa'



export default function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className='navbar'>
            <nav className='navbar-nav'>
                <ul className='rightSide'>
                    <Link to='/' className='app__navbar-link'>Home</Link>
                    <Link to='flight-plan' className='app__navbar-link'>Flight Plan</Link>
                    <Link to='about' className='app__navbar-link'>Our Story</Link>
                    <Link to='fly-outs' className='app__navbar-link'>Fly-Outs</Link>
                </ul>
                <div className='button'>
                    <button onClick={toggleNavbar} className='fa-button'><FaBars /></button>
                </div>
                <ul className='leftSide' id={openLinks ? 'open' : 'close'}>
                    <div className='hiddenLinks'>
                        <header className='header-hidden'>
                            <button onClick={toggleNavbar} className='fa-button exit-button'><FaTimes /></button>

                            <h2 className='h2-hidden'>Flight Deck Grill</h2>
                        </header>
                        <Link to='/' className='link-hidden'>Home</Link>
                        <Link to='flight-plan' className='link-hidden'>Flight Plan</Link>
                        <Link to='about' className='link-hidden'>Our Story</Link>
                        <Link to='fly-outs' className='link-hidden'>Fly-Outs</Link>
                        <footer className='hidden-foot'>
                            <img src={logo} className='img-hidden' />
                            <p className='footer-p'>Located just west of Elite Aviation</p>
                            <p className='footer-p'> @ Vance Brand Airport</p>
                            <p className='footer-p'>-------------------------------------</p>
                            <p className='footer-p'>229 Airport Road, Longmont, CO 80503</p>
                            <a className='ref' href="https://www.facebook.com/FlightDeckGrill"><FaFacebookSquare /></a>
                        </footer>
                    </div>
                </ul>
            </nav>
        </div >
    )
}
