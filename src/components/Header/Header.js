import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <header className="header">
        <div className='header-margin'></div>
		<div className="responsive-container">
			<h1>Loïc Hug</h1>
            <nav>
                <a href="/">Accueil</a>
                <a href="/shoppingCart">Mon panier</a>
            </nav>
		</div>
	</header>
  )
}