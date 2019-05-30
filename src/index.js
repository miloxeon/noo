import React from 'react'
import ReactDOM from 'react-dom'
import 'modern-normalize'
import 'react-tippy/dist/tippy.css'
import 'style.css'

import App from 'components/app'
import { Provider } from 'react-redux'
import store from 'store'

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
