import { OfferItems } from '../module/offers.module.js'

export const fetchingOffersFromAPI = (idOfContainer, API) => {
  const promiseOfoffers = fetch(API)
  promiseOfoffers
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      const mainOffersItems = new OfferItems(idOfContainer, json.data)
      mainOffersItems.render()
    })
}
