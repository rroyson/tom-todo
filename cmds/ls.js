const { map, reduce } = require('../fp-utils')
const {valuesIn} = require('ramda')

// const removeKeys = function(v, list) {
//   return list[0]
// }
//
// const displayVal = function (list, fn) {
//   return fn.list
// }

function li (todo) {
  return `[${todo.completed ? 'x' : ' '}] - ${todo.text}`
} //${todo.id}


module.exports = function ls(list) {
  console.log('')
  console.log('To-Dos')
  console.log('----------------------')

  map(function(todo) {
    console.log(li(todo))
  }, list)

  console.log('----------------------')
  console.log(
    reduce(
      function(acc, value) {
        return acc + 1
      },
      0,
      list
    ),
    ' Items Not Complete'
  )
}


// const getVal = compose(
//   tap(print),
//   valuesIn(),
//   map()
// ) (list)
