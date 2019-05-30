import React, { Component, Fragment } from 'react'
import style from './style.module.css'
import { copy } from './logic'

import Button from 'ui/button'
import { Tooltip } from 'react-tippy'

class Copy extends Component {

  constructor (props) {
    super (props)
    this.ghost = React.createRef()

    this.copy = copy.bind(this)
  }

  render () {
    return (
      <Fragment>
        <Tooltip
          title='Copied!'
          position='top'
          trigger='click'
        >
          <Button
            { ...this.props }
            onClick={ this.copy }
            data-value={ this.props.value }
            >
              { this.props.children }
            </Button>
        </Tooltip>
        <textarea
          ref={ this.ghost }
          className={ style.ghost }
        ></textarea>
      </Fragment>
    )
  }
}

export default Copy
