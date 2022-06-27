import React from 'react'
import './header.scss'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

export default function Header() {
  return (
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
                    <input type="checkbox" id="menu-toggle"/>
                    <label for="menu-toggle" className="hamburger center">
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
  )
}