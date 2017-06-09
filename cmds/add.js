const { get, set } = require('../lib/store.js')
const { append } = require ('ramda')
const { map, reduce } = require ('../fp-utils')
const ls = require ('./ls.js')
const foo = [a, b, cmd, ...rest] = process.argv
const editList = require ('./edit-list.js')


module.exports = function add (list) {
  return ls(get())
}
//store.set(newTodoList)
