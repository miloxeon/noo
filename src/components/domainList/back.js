import React from 'react'
import Button from 'ui/button'

export default props => (
  <Button
    type='button'
    onClick={ props.toggleDomainEditing }
  >
    {'<'} Back
  </Button>
)
