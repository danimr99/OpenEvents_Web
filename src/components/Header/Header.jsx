import React, { useState } from 'react'

import HeaderAvatar from '../HeaderAvatar/HeaderAvatar'
import logo from '../../assets/images/openevents.png'
import './Header.css'

function Header () {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <header className='header'>
      <img className='header-img' src={logo} alt='OpenEvents' />

      <button
        className='header-button'
        onClick={toggleMenu}
      >
        <svg className='header-svg' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
          <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
        </svg>
      </button>

      <nav className={`header-nav ${menu ? 'active' : ''}`}>
        <ul className='header-ul'>
          <li className='header-li'>Events</li>
          <li className='header-li'>Organize</li>
          <li className='header-li'>Social</li>
        </ul>
      </nav>

      <HeaderAvatar isVisible={menu} />
    </header>
  )
}

export default Header
