import React from 'react'
import { connect as originalConnect } from 'react-redux'
import { keccak512 } from 'js-sha3'

export const pairs = (obj, key, value) =>
  Object.keys(obj).map(x => ({
    [key]: x,
    [value]: obj[x]
  }))

export const assoc = (obj, key, value) => ({ ...obj,
  [key]: value
})

export const connect = (mstp, mdtp) => originalConnect(mstp,
  ((dispatch, props) => mdtp(
    (type, payload) => dispatch({ type, payload }),
    props
  ))
)

export const isParsable = str => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

export const prevent = (e, next) => {
  e.preventDefault()
  return next(e)
}

export const hash = (domain, secret) =>
  keccak512(domain + secret).slice(0, 20)

export const index = Component => (data, i) =>
  <Component { ...data } key={ i } />

export const encodeIcon = name => fetch('https://favicon.keeweb.info/' + name)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))

export const omit = (obj, key) => {
  let result = {}

  Object.keys(obj).filter(entity => entity !== key).forEach(entity => {
    result[entity] = obj[entity]
  })

  return result
}
