const { map, reduce } = require('../fp-utils')

module.exports = function ls(list) {
  console.log('')
  console.log('To-Dos')
  console.log('----------------------')

  map(function(todo) {
    console.log(todo)
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
