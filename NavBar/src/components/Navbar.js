import React, { useState } from 'react'
import "./navbar.css";
import { FaFacebookSquare, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className='logo'>
                    <h1><span>G</span>
                        <span>D</span>
                        <span>S</span>
                        <span>C</span></h1>
                </div>

                {/* <div className='menu'
                > */}
                <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu"
          }>
                    <ul>
                        <ol><a href="#">Home</a></ol>
                        <ol><a href="#">Contact</a></ol>
                        <ol><a href="#">About</a></ol>
                        
                    </ul>
                </div>
                <div className='social'>
                    <ul className='social-desktop'>
                        <ol href="#" target="_LinkdIn" className='linkdin'
                        ><FaLinkedinIn /> </ol>

                        <ol href="#" target="_Facebook" className='facebook'
                        ><FaFacebookSquare /> </ol>

                        <ol href="#" target="_Instagram" className='instagram'
                        ><FaInstagramSquare /> </ol>
                    </ul>
                </div>
            </nav>

            <section className='body'>
                <h1>Welcome</h1>
            </section>

        </>
    )
}

export default Navbar
