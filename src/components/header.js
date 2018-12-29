import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'

import '../stylesheets/header.css'

const Header = () => (
  <div className="header__wrapper">
    <h1 className="header__logo">
      <Link to="/">
        <Logo />
      </Link>
    </h1>

    <div className="header__links">
      <Link to="/kamieniarstwo-budowlane" className="header__link">
        Kamieniarstwo Budowlane
      </Link>
      <Link to="/nagrobki" className="header__link">
        Nagrobki
      </Link>
      <Link to="/kontakt" className="header__link">
        Kontakt
      </Link>
    </div>
  </div>
)

export default Header
