const { get, set } = require('../lib/store.js')
const { append } = require ('ramda')
const { map, reduce } = require ('../fp-utils')
const ls = require ('./ls.js')
const [a, b, cmd, ...rest] = process.argv
const {add} = require ('./add.js')

module.exports = function () {
  setNewList(get())
  return ls(get())
}

var editList = function (obj, list) {
  const newObj = {
    "text":  [...rest].join(' '),
    //"id": list.length + 1,
    "completed": false
  }
  return append(newObj, list)
}

function setNewList (list) {
  return set(editList([...rest], list))

}
