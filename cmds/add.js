const { get, set } = require('../lib/store.js')
const { append } = require ('ramda')
const { map } = require ('../fp-utils')

module.exports = function add (list) {
  return appender("cat",list)

}

function appender (userInput, list) {
  return append(userInput, list)
}
