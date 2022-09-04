import { OfferItems } from '../module/offers.module.js'

export const fetchingOffersFromAPI = (idOfContainer, API) => {
  const promiseOfOffers = fetch(API)
  promiseOfOffers
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      const mainOffersItems = new OfferItems(idOfContainer, json.data)
      mainOffersItems.render()
    })
}
