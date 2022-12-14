import { Base } from '../common/base.js'
import { app } from '../common/common.js'

export class NavBar extends Base {
  constructor(id) {
    super(id)
  }
  _headerMenuNav() {
    return app.nav
      .map((obj) => {
        return `<li class="submenu-item">${obj.title}</li>`
      })
      .join('')
  }
  render() {
    const content = this._headerMenuNav()
    this.setContent(content)
  }
}
