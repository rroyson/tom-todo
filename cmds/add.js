const { get, set } = require('../lib/store.js')
const { append } = require ('ramda')
const { map, reduce } = require ('../fp-utils')
const foo = [a, b, cmd, ...rest] = process.argv



module.exports = function add (list) {
  return appender(...rest, list)
}

function appender (userInput, list) {
  return append(userInput, list)
}
