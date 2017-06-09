const { get, set } = require('../lib/store.js')
const { append } = require ('ramda')
const { map, reduce } = require ('../fp-utils')
const ls = require ('./ls.js')
const [a, b, cmd, ...rest] = process.argv
const {add} = require ('./add.js')
