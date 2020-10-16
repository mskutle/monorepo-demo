
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./milescreate-component-library.cjs.production.min.js')
} else {
  module.exports = require('./milescreate-component-library.cjs.development.js')
}
