import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'ui/logo'
import { ReactComponent as Info } from 'assets/info.svg'

export default props => (
  <div className='teeter'>
    <Logo>
      <h2>Passwords</h2>
    </Logo>
    <Link
      to='/faq'
      target='_blank'
    >
      <Info />
    </Link>
  </div>
)
