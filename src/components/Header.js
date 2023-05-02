import React from 'react'
import "../styles/header.css"

const Header = () => {
  return(
	<header className="header">
	  <div id="logo-wrapper">
        <a href="index.html">
          <img
            src="images/logo_large.png"
            alt="Buffalo Jo logo"
            class="logo"
          />
        </a>  
      </div>
      <nav role="navigation" class="menu">
        <ul>
          <li><a href="presentation.html" class="menu-item">Qui suis-je ?</a></li>
          <li><a href="#footer" class="menu-item">Me contacter</a></li>
        </ul>
      </nav>
	</header>
  )
}

export default Header