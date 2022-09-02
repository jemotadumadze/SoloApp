import { fetchingOffersFromAPI } from './common/fetchoffers.js'
import { queryUrl } from './config/config.js'

import { FilterRange } from './module/filter.module.js'

const offersContainer = document.getElementById('offers-container')
const filterContainer = document.getElementById('filter-price')

fetchingOffersFromAPI(offersContainer, `${queryUrl}?limit=9`)

var filterCityIsActive = true
var btn = document.getElementById('btn')
btn.addEventListener(
  'click',
  function () {
    filterCityIsActive = !filterCityIsActive
    if (filterCityIsActive) {
      document.getElementById('filter-city').style.display = 'block'
    } else {
      document.getElementById('filter-city').style.display = 'none'
    }
  },
  false,
)

var filterRangeActive = true
var rangeBtn = document.getElementById('range-btn')
rangeBtn.addEventListener(
  'click',
  function () {
    filterRangeActive = !filterRangeActive
    if (filterRangeActive) {
      document.getElementById('filter-price').style.display = 'block'
    } else {
      document.getElementById('filter-price').style.display = 'none'
    }
  },
  false,
)

var filterStatusActive = true
var btns = document.getElementById('status-btn')
btns.addEventListener(
  'click',
  function () {
    filterStatusActive = !filterStatusActive
    if (filterStatusActive) {
      document.getElementById('filter-status').style.display = 'block'
    } else {
      document.getElementById('filter-status').style.display = 'none'
    }
  },
  false,
)

const filters = new FilterRange(filterContainer)
filters.render()
