const { get, set } = require('../lib/store.js')
const { append, remove } = require ('ramda')
const { map, reduce } = require ('../fp-utils')
const ls = require ('./ls.js')
const [a, b, cmd, ...rest] = process.argv

module.exports = function rm (list) {
  const removeItem = function (list) {
    return remove([...rest] -1, 1, list)
  }

  return set(removeItem(list))
  return ls(get())
}



// const removeItem = function (list) {
//   return remove([...rest] -1, 1, list)
// }
