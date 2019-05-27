import React from 'react'
import style from './style.module.css'

const Button = props => (
  <button className={ style.root } { ...props }>
    { props.children }
  </button>
)

Button.displayName = 'Button'

export default Button
