import { createStore } from 'redux'
import initialState from 'store/initialState'

import { actions as app } from 'components/app'
import { actions as logout } from 'components/logout'
import { actions as secretInput } from 'components/secretInput'
import { actions as newDomainInput } from 'components/newDomainInput'
import { actions as domainList } from 'components/domainList'
import root from 'store/actions'

const actions = {
  ...app,
  ...logout,
  ...secretInput,
  ...newDomainInput,
  ...domainList,
  ...root
}

export default createStore(
  (state = initialState, { type, payload }) => {
    return actions[type] ? actions[type](state, payload) : state
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
