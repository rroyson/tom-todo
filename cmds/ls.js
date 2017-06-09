const { map, reduce } = require('../fp-utils')
const {valuesIn} = require('ramda')
const { get, set } = require('../lib/store.js')

// const removeKeys = function(v, list) {
//   return list[0]
// }
//
// const displayVal = function (list, fn) {
//   return fn.list
// }

function li (todo) {
  return `[${todo.completed ? 'x' : ' '}] - ${todo.id} ${todo.text}`
}


module.exports = function ls(list) {

  const ourReduce = reduce(
    function(acc, value) {
      return acc + 1
    },
    0,
    get()
  )
  
  console.log('')
  console.log('To-Dos')
  console.log('----------------------')

  map(function(todo) {
    console.log(li(todo))
  }, list)

  console.log('----------------------')
  console.log(
    ourReduce,
    ' Items Not Complete'
  )

}



// const getVal = compose(
//   tap(print),
//   valuesIn(),
//   map()
// ) (list)
