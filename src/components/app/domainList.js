import React, { Fragment } from 'react'
import Title from 'react-document-title'

import DomainList from 'components/domainList'
import Logout from 'components/logout'

export default props => (
  <Title title='Saved passwords'>
    <Fragment>
      <DomainList />
      <Logout />
    </Fragment>
  </Title>
)
