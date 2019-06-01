import React, { Fragment } from 'react'
import Title from 'react-document-title'
import { Link } from 'react-router-dom'

import Faq from 'ui/faq'

export default props => (
  <Title title='Faq | Noo – the papassword manager'>
    <Fragment>
      <p>
        <Link to='/'>
          {'<'} Go to main page
        </Link>
      </p>
      <Faq />
    </Fragment>
  </Title>
)
