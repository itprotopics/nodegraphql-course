import math from './math'
import myLocation , { getGreeting, message, name } from './myModule'
import myAddFunction, { substractFunction } from './math'

//import myLocation from './myModule'

console.log(message + ' ' + name + ' and this is my location ' + myLocation)

console.log(getGreeting('Jessica'))

console.log (myAddFunction(3,4))
console.log (substractFunction(3,4))

