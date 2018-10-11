# Geo utils

## Usage

```
const geoUtils = require('node-geoutils')

const { latitude, longitude, country } = geoUtils.getCountryInfo('FR') // you can also do geoUtils.getCountryInfo('France')

console.log('Latitude:', latitude) // outputs 'Latitude: 46.227638'
console.log('Longitude:', longitude) // outputs 'Longitude: 2.213749'
console.log('Country:', country) // outputs 'Country: France'
```
