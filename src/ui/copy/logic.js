export function copy () {

  const content = this.button.current.dataset.value

  if (content.length > 0) {

    // get the textarea
    const ghost = this.ghost.current

    // unhide it
    ghost.removeAttribute('hidden')

    // assign the value to copy
    ghost.value = content

    // necessary
    ghost.contentEditable = true

    // some range magic for safari
    const range = document.createRange()
    range.selectNodeContents(ghost)
    const s = window.getSelection()
    s.removeAllRanges()
    s.addRange(range)
    ghost.setSelectionRange(0, 999999)

    // just text selection for other normal browsers
    ghost.select()

    // copy
    document.execCommand('copy')

    // hide it again
    ghost.setAttribute('hidden', true)

    // refocus
    this.button.current.focus()
  }
}
