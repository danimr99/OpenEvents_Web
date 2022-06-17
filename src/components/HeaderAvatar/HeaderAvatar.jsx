import React from 'react'

import './HeaderAvatar.css'

function HeaderAvatar ({ isVisible }) {
  const user = {
    name: 'Daniel Muelle',
    image: 'https://images.pexels.com/photos/12317767/pexels-photo-12317767.jpeg'
  }

  return (
    <div className={`header-profile ${isVisible ? 'active' : ''}`}>
      <h3 className='header-username'>{user.name}</h3>
      <img className='header-avatar' src={user.image} alt='Avatar' />
    </div>
  )
}

export default HeaderAvatar
