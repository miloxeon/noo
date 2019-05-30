import React from 'react'
import style from './style.module.css'
import { ReactComponent as Logo } from 'assets/logo.svg'

export default props => (
  <div className={ style.root } { ...props }>
    <Logo />
    { props.children }
  </div>
)
