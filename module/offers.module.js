import { Base } from '../common/base.js'

export class OfferItems extends Base {
  constructor(id, data) {
    super(id, data)
  }
  _renderOfferList(list) {
    return list
      .map((obj) => {
        return `
           <div class="offer-item">
              <div class="offer-image">
              <img src="https://ramad.bog.ge/s3/solo${obj.image.url}" alt="" >
              </div>
            <div class="offer-content">
             <div class="developer">${obj.developer}</div>
             <div class="priceLabel">${obj.priceLabel}</div>
             <div class="address">${obj.address}</div>
             </div>
             <button class="offers-button">გაიგე მეტი</button>
          
          </div>
            `
      })
      .join('')
  }
  render() {
    const content = this._renderOfferList(this.data.items)
    this.setContent(content)
    this.manageOffersQuantity()
  }

  manageOffersQuantity() {
    document.getElementById('off-count').innerHTML = `( ${this.data.total} )`
    if (this.data.items.length === 0) {
      document.querySelector('.items-container').style.display = 'flex'
    } else if (document.querySelector('.items-container')) {
      document.querySelector('.items-container').style.display = 'none'
    }
  }
}
