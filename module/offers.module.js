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
              <div class="offer">
              <img src="https://ramad.bog.ge/s3/solo${obj.image.url}" alt="" >
              </div>

             <div class="developer">${obj.developer}</div>
             <div class="priceLabel">${obj.priceLabel}</div>
             <div class="address">${obj.address}</div>
              
             <button class="offers-button">გაიგე მეტი</button>
          </div>
            `
          })
          .join('')
      }
      render() {
        const content = this._renderOfferList(this.data.items)
        this.setContent(content)
      }
    }