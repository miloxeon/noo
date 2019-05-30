import React from 'react'
import ReactDOM from 'react-dom'
import 'react-tippy/dist/tippy.css'
import 'style.css'

import App from 'components/app'
import { Provider } from 'react-redux'
import store from 'store'

import * as serviceWorker from 'serviceWorker'

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
