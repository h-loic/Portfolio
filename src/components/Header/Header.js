import React, { useState } from 'react'
import './header.scss'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

export default function Header() {

    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className="header">
                <div className='header-margin'></div>
                <div className="responsive-container">
                    <h1>Loïc Hug</h1>
                    <nav>
                        <a href="/" className='nav-item'>
                            <BsGithub size={28} className='center'/>
                        </a>
                        <a href="/" className='nav-item'>
                            <BsLinkedin size={28} className='center'/>
                        </a>
                        <a className='center nav-button' href='/'>
                            <input type="checkbox" id="menu-toggle" onClick={toggleMenu}/>
                            <label htmlFor="menu-toggle" className="hamburger center">
                                <span className="bun bun-top">
                                    <span className="bun-crust bun-crust-top"></span>
                                </span>
                                <span className="bun bun-bottom">
                                    <span className="bun-crust bun-crust-bottom"></span>
                                </span>
                            </label>
                        </a>
                    </nav>
                </div>
            </header>
                <div id="myNav" className="overlay"         
                    style={{
                        height : isOpen ? "100%" : "0%"
                    }}>
                    <div className="overlay-content">
                        <a href="/">Mes projets</a>
                        <a href="/">Mes compétences</a>
                        <a href="/">A propos de moi</a>
                        <a href="/">Me contacter</a>
                        <div className='row menu-icons'>
                            <div className='col-3'/>
                            <a href='/zd' className='col-3'><BsGithub size={28} className='icon'/></a>
                            <a href='/zd' className='col-3'><BsLinkedin size={28} className='icon'/></a>
                            <div className='col-3'/>
                        </div>
                    </div>
                </div>
        </>
    )
}