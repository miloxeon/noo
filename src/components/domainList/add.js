import React from 'react'
import Button from 'ui/button'

export default props => (
  <Button
    autoFocus
    type='button'
    onClick={ props.activateDomainInput }
  >
    Add...
  </Button>
)
