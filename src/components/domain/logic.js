export const computeStyle = props => ({
  padding: '8px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: props.domainEditingActive ? 'row-reverse' : 'row',
  animationDelay: (-1 * (0.2 + Math.random()) / 2) + 's',
  animationDuration: (0.2 + Math.random() / 2) + 's'
})
