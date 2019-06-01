import React from 'react'
import { computeStyle } from './logic'
import Copy from 'ui/copy'
import Favicon from 'components/favicon'

export default props => (
  <Copy value={ props.password } style={ computeStyle(props) }>
    <Favicon name={ props.name } />
    { props.name }
  </Copy>
)
