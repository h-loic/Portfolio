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
                <a href="/">
                    <BsGithub size={28} className='center'/>
                </a>
                <a href="/">
                    <BsLinkedin size={28} className='center'/>
                </a>
            </nav>
		</div>
	</header>
  )
}