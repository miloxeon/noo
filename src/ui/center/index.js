import React from 'react'

const Center = props => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    margin: '24px 0'
  }} { ...props }>
    { props.children }
  </div>
)

Center.displayName = 'Center'

export default Center
