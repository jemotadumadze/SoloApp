import { fetchingOffersFromAPI } from './common/fetchoffers.js'
import { queryUrl } from './config/config.js'
import { NavBar } from './module/navbar.module.js'
import { CityFilter } from './module/city.filter.module.js'
import { StatusFilter } from './module/status.filter.module.js'
import { FilterRange } from './module/price.filter.module.js'
import { MainHeaderNav } from './module/mainheadernav.module.js'

const offersContainer = document.getElementById('offers-container')
const NavBarContainer = document.getElementById('nav-parent')
const filterContainer = document.getElementById('filter-price')
const cityFilterContainer = document.getElementById('filter-city')
const statusFilterContainer = document.getElementById('filter-status')
const mainHeaderContainer = document.getElementById('main-header-nav')

var queryParams = ''

// fetching Offers From API, limit:9
fetchingOffersFromAPI(offersContainer, `${queryUrl}?limit=9`)

// render range filter dynamically
const filters = new FilterRange(filterContainer)
filters.render()

// render city filter dynamically
const city = new CityFilter(cityFilterContainer)
city.render()

// render status filter dynamically
const status = new StatusFilter(statusFilterContainer)
status.render()

// render nav bar dynamically
const navBar = new NavBar(NavBarContainer)
navBar.render()

const mainheader = new MainHeaderNav(mainHeaderContainer)
mainheader.render()

//city filter
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

//range filter
var filterRangeActive = true
var rangeBtn = document.getElementById('range-btn')
rangeBtn.addEventListener(
  'click',
  function () {
    filterRangeActive = !filterRangeActive
    if (filterRangeActive) {
      filterContainer.style.display = 'block'
    } else {
      filterContainer.style.display = 'none'
    }
  },
  false,
)

//status filter
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

// ******* MANAGE FILTERS *******

// handle city filter
var filteredCities = []
var checkCity = document.getElementById('filter-city')
checkCity.addEventListener(
  'change',
  function (e) {
    let currCity = e.target.value
    if (!filteredCities.includes(currCity)) {
      filteredCities.push(currCity)
    } else {
      let newFilteredCities = []
      for (let index = 0; index < filteredCities.length; index++) {
        if (filteredCities[index] !== currCity) {
          newFilteredCities.push(filteredCities[index])
        }
      }
      filteredCities = newFilteredCities
    }

    getOffers()
  },
  false,
)

// handle price filter
var priceValue = []
var radioPrice = filterContainer
radioPrice.addEventListener(
  'click',
  function (e) {
    priceValue = e.target.value.split('-')
    getOffers()
  },
  false,
)

var filteredStatuses = []
var checkStatus = document.getElementById('filter-status')
checkStatus.addEventListener(
  'change',
  function (e) {
    let newValue = e.target.value
    if (!filteredStatuses.includes(newValue)) {
      filteredStatuses.push(newValue)
    } else {
      let newStatuses = []
      for (let index = 0; index < filteredStatuses.length; index++) {
        if (filteredStatuses[index] !== newValue) {
          newStatuses.push(filteredStatuses[index])
        }
      }
      filteredStatuses = newStatuses
    }
    getOffers()
  },
  false,
)

// sort by price
var sortValue = ''
var sortSelector = document.getElementById('sort-selector')
sortSelector.addEventListener(
  'change',
  function () {
    sortValue = sortSelector.options[sortSelector.selectedIndex].value
    getOffers()
  },
  false,
)

var searchValue = ''
var searchInput = document.getElementById('search-input')
searchInput.addEventListener(
  'change',
  function () {
    searchValue = searchInput.value
    getOffers()
  },
  false,
)

function getOffers() {
  queryParams = ''
  if (filteredCities.length > 0) {
    queryParams += '&cityParam=' + filteredCities.toString()
  }

  if (filteredStatuses.length > 0) {
    queryParams += '&typeParam=' + filteredStatuses.toString()
  }

  if (priceValue.length > 0 && priceValue[0] !== 'all') {
    queryParams += '&fromParam=' + priceValue[0]
    queryParams += '&toParam=' + priceValue[1]
  }

  if (sortValue.length > 0 && sortValue !== 'all') {
    queryParams += '&sortBy=' + sortValue
  }

  if (searchValue.length > 0) {
    queryParams += '&searchStr=' + searchValue
  }
  fetchingOffersFromAPI(offersContainer, `${queryUrl}?limit=9${queryParams}`)
}
