import { Base } from '../common/base.js'
import { app } from '../common/common.js'

export class CityFilter extends Base {
  constructor(id) {
    super(id)
  }
  _cityfilter() {
    return app.city
      .map((obj) => {
        return `<input type="checkbox" name=city value="${obj.value}" id="city"> <label>${obj.title}</label><br>`
      })
      .join('')
  }
  render() {
    const content = this._cityfilter()
    this.setContent(content)
  }
}
