import React from 'react'
import style from './style.module.css'

const Button = React.forwardRef((props, ref) => (
  <button
    ref={ ref }
    { ...props }
    className={ [style.root, props.className].join(' ') }
  >
    { props.children }
  </button>
))

Button.displayName = 'Button'

export default Button
