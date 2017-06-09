
const [a, b, cmd, ...rest] = process.argv


// commands
const { get }  = require('./lib/store.js')
const help = require('./cmds/help')
const add = require('./cmds/add')
const ls = require('./cmds/ls')
const editList = require ('./cmds/edit-list.js')

function handler(cmd = ('')) {
  switch(cmd.toLowerCase()) {
    case 'help':
      return help()
    case 'add':
        return editList(get())
    case 'ls':
        return ls(get())
    default:
      return 'Welcome to my todo app'
  }
}

console.log(
  handler(cmd)
)
