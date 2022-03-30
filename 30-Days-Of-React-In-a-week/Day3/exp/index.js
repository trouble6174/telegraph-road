import mathUtils from './math.js'

import {sum, prod} from "./math.js";

import * as everything from './math.js'

console.log("sum(1, 2, 3)", sum(1, 2, 3))
console.log("prod(1, 2, 3)", prod(1, 2, 3))
console.log("mathUtils.prod(1, 2, 3, 4)", mathUtils.prod(1, 2, 3, 4))

// import * as everything: Module {Symbol(Symbol.toStringTag): 'Module'} , type is:  object
console.log("import * as everything: ", everything, ", type is: ", typeof everything)
