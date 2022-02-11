import * as coin from './modules/coin.mjs';

import minimist from 'minimist';
const args = minimist(process.argv.slice(2))

args["call"]
const call = args.call || null
console.log(call== null || (call != 'heads' && call != 'tails') ? 
"Error: no input.\nUsage: node guess-flip --call=[heads|tails]" : coin.flipACoin(call))