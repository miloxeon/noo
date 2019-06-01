import { encodeIcon } from 'lib'

export function init () {
  if (!this.props.domainEditingActive && !this.props.iconIsPresent) {
    encodeIcon(this.props.name).then(value => this.props.setIcon({
      name: this.props.name,
      value
    })).catch(
      () => console.warn(`It seems like "${this.props.name}" doesn't have an icon.`)
    )
  }
}
