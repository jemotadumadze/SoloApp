import { Base } from '../common/base.js'
import { app } from '../common/common.js'

export class MainHeaderNav extends Base {
  constructor(id) {
    super(id)
  }
  _mainheadernav() {
    return app.header
      .map((obj) => {
        return `
        <li>
        <a href="">${obj.title}</a>
        </li>`
      })
      .join('')
  }
  render() {
    const content = this._mainheadernav()
    this.setContent(content)
  }
}
