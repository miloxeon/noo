import posed from 'react-pose'

export default posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 150,
    transition: {
      x: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
})
