import React from 'react'
import style from './style.module.css'

const Button = props => (
  <button
    { ...props }
    className={ [style.root, props.className].join(' ') }
  >
    { props.children }
  </button>
)

Button.displayName = 'Button'

export default Button
