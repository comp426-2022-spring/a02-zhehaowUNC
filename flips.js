import * as coin from './modules/coin.mjs';
//const coin = require('./modules/coin.mjs')
//import minimist from 'minimist';
import minimist from 'minimist';
const args = minimist(process.argv.slice(2))

args["number"]
const number = args.number || 1
var a = []
a = coin.coinFlips(number)
console.log(a)
console.log(coin.countFlips(a))