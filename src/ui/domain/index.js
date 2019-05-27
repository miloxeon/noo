import React from 'react'
import style from './style.module.css'

export default props => (
  <li className={ style.root }>
    <span>{ props.name }</span>
    :&nbsp;
    <span className={ style.grey }>
      { props.password }
    </span>
  </li>
)
