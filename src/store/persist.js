import initialState from 'store/initialState'
import { isParsable } from 'lib'

const merge = (old, current) => {
  let result = Object.assign({}, current)

  Object.keys(current).forEach(key => {
    if (old[key]) {
      result[key] = old[key]
    }
  })

  return result
}

export default store => next => action => {
  const result = next(action)
  const currentState = store.getState()
  const persistedState = localStorage.getItem('noo')

  const mergedState = isParsable(persistedState) ?
    merge(JSON.parse(persistedState), currentState) :
    null

  if ((currentState === initialState) && Boolean(mergedState)) {
    store.dispatch({ type: 'hydrate', payload: mergedState })
  } else {
    localStorage.setItem('noo', JSON.stringify(currentState))
  }
  return result
}
