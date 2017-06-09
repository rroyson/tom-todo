const { get, set } = require('../lib/store.js')
const { append } = require ('ramda')
const { map, reduce } = require ('../fp-utils')
const ls = require ('./ls.js')
const foo = [a, b, cmd, ...rest] = process.argv
const {add} = require ('./add.js')

module.exports = function () {
  setNewList(get())
  return ls(get())
}

var editList = function (obj, list) {
  const newObj = {
    "text":  foo[3],
    "id": list.length + 1,
    "completed": false
  }
  return append(newObj, list)
}

function setNewList (list) {
  //const newTodoList = editList(...rest, list)
  return set(editList(...rest, list))

}
