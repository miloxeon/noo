import React from 'react'
import style from './style.module.css'

const Input = props => (
  <input className={ style.root } { ...props } />
)

Input.displayName = 'Input'

export default Input
