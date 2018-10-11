const countries = require('./countries')

const getCountryInfo = (query) => countries[query] || Object.values(countries).find(countryInfo => countryInfo.country === query)

module.exports = {
  getCountryInfo
}
