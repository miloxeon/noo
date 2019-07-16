import React from 'react'
import { computeStyle } from './logic'

import Button from 'ui/button'
import Favicon from 'components/favicon'

export default props => (
  <Button
    onClick={ props.remove }
    style={ computeStyle(props) }
    className='shake'
    title='Remove'
  >
    <Favicon name={ props.name } />
    { props.name }
  </Button>
)
