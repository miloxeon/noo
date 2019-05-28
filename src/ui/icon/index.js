import React from 'react'

import { ReactComponent as Back } from './back.svg'

export default props => ({
  back: <Back />
})[props.name] || null
