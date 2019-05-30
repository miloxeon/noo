export function copy (e) {
  const content = e.target.dataset.value
  if (content.length > 0) {
    const ghost = this.ghost.current
    ghost.removeAttribute('hidden')
    ghost.value = content
    ghost.select()
    document.execCommand('copy')
    ghost.setAttribute('hidden', true)
    this.button.current.focus()
  }
}
