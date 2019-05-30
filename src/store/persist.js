import initialState from 'store/initialState'

export default store => next => action => {
  const result = next(action)
  const currentState = store.getState()
  const persistedState = localStorage.getItem('noo')

  if ((currentState === initialState) && Boolean(persistedState)) {
    store.dispatch({ type: 'hydrate', payload: persistedState })
  } else {
    localStorage.setItem('noo', JSON.stringify(currentState))
  }
  return result
}
