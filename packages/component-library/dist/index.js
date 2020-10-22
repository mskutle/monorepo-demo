
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./component-library.cjs.production.min.js')
} else {
  module.exports = require('./component-library.cjs.development.js')
}
