import React from 'react'

const Pad = props => (
  <div style={{ padding: props.padding || '12px' }} { ...props }>
    { props.children }
  </div>
)

Pad.displayName = 'Pad'

export default Pad
