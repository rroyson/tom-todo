const { get, set } = require('../lib/store.js')
const { append, remove, filter } = require ('ramda')
const { map, reduce } = require ('../fp-utils')
const ls = require ('./ls.js')
const [a, b, cmd, ...rest] = process.argv

module.exports = function(list) {
  removeItem(get())
//  filter(subtractById(ourReduce),list)
  return ls(get())
}

//
// function subtractById (n) {
//   if ([...rest] > n) {
//     return n - 1
//   }
// }





const removeItem = function (list) {
  return set(remove([...rest] -1, 1, list))
}
