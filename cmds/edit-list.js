const { get, set } = require('../lib/store.js')
const { append } = require ('ramda')
const { map, reduce } = require ('../fp-utils')
const ls = require ('./ls.js')
const foo = [a, b, cmd, ...rest] = process.argv

module.exports = function () {
  return setNewList()
}


var editList = function (obj, list) {
  const newObj = {
    "name":  foo[3],
    "id": list.length + 1,
    "completed": false
  }
  return append(newObj, list)
}

function setNewList (get) {
  const newTodoList = editList(...rest, get)
  return set(newTodoList)
}
