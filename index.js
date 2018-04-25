const countries = require('./countries')

const getCountryInfo = (countryCode) => countries[countryCode]

module.exports = {
  getCountryInfo
}
