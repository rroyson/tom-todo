const { get, set } = require('../lib/store.js')
const { append } = require ('ramda')
const { map, reduce } = require ('../fp-utils')
const ls = require ('./ls.js')
const foo = [a, b, cmd, ...rest] = process.argv



module.exports = function add (list) {
  const newTodoList = appender(...rest, list)
  return set(newTodoList)

}

function appender (userInput, list) {
  return append(userInput, list)
}

var template = function (list) {
  return {
    `${store.text === ...rest},
    ${store.id === store.id.length + 1},
    ${store.complete === false}`
  }
}


//store.set(newTodoList)
