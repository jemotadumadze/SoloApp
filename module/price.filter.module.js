import { Base } from '../common/base.js'

export class FilterRange extends Base {
  constructor(id) {
    super(id)
  }
  _renderfilterList() {
    const list = [0, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000]
    return list
      .map((obj, index) => {
        return `
        ${
          index === 0
            ? `
        <div class="radio-item">
          <input type="radio" id="r${index}" name="range" value="all" class="radio-input">
          <label for="r${index}">ფასები</label><br>
        </div>
        `
            : `<div class="radio-item">
              <input type="radio" id="r${index}" name="range" value="${obj}-${
                obj + 500
              }" class="radio-input">
              <label for="r${index}">${obj}-${
                obj === 5000 ? 10000 : obj + 500
              }</label><br>
              </div>
          `
        }
        `
      })
      .join('')
  }
  render() {
    const content = this._renderfilterList()
    this.setContent(content)
  }
}
