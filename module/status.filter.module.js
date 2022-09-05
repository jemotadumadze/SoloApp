import { Base } from '../common/base.js'
import { app } from '../common/common.js'

export class StatusFilter extends Base {
  constructor(id) {
    super(id)
  }
  _statusfilter() {
    return app.status
      .map((obj) => {
        return `<input type="checkbox" value="${obj.value}" id="status">
                <label for="მწვანე კარკასი">${obj.title}</label><br>`
      })
      .join('')
  }
  render() {
    const content = this._statusfilter()
    this.setContent(content)
  }
}
