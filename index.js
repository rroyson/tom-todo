
const [a, b, cmd, ...rest] = process.argv


// commands
const { get }  = require('./lib/store.js')
const help = require('./cmds/help')
const add = require('./cmds/add')
const ls = require('./cmds/ls')


function handler(cmd = ('')) {
  switch(cmd.toLowerCase()) {
    case 'help':
      return help()
    case 'add':
        return add()
    case 'ls':
        return ls(get())
    default:
      return 'Welcome to my todo app'
  }
}

console.log(
  handler(cmd)
)
