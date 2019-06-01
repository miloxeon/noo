import React from 'react'
import style from './style.module.css'

export default props => (
  <img
    alt=''
    src={ props.src }
    className={ style.img }
  />
)
