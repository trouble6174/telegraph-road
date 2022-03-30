import {constWebTechs} from "./constWebTechs.js";
import {countries} from "./constCountries.js";

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort()
console.log(ages)
console.log("max", Math.max(...ages))
console.log("min", Math.min(...ages))

// Find the median age(one middle item or two middle items divided by two)
function median(array) {
    let l = array.length >> 1
    array = array.sort((a, b) => a - b)
    return array.length % 2 === 0 ? array.slice(l - 1, l + 1).reduce((x, y) => x + y) / 2 : array[l]
}

console.log("median", median(ages))
// Find the average age(all items divided by number of items)
const avg = x => x.reduce((a, b) => a + b) / x.length
console.log("avg", avg(ages))
// Find the range of the ages(max minus min)
console.log("range", Math.max(...ages) - Math.min(...ages))
// Compare the value of (min - average) and (max - average), use abs() method
console.log("abs (max - average)", Math.abs(Math.max(...ages) - avg(ages)).toFixed(2),
    "abs (max - average)", Math.abs(Math.min(...ages) - avg(ages)).toFixed(2))

// Slice the first ten countries from the countries array
console.log(countries.slice(0, 10), countries.length)
// Find the middle country(ies) in the countries array
console.log(countries[countries.length >> 1])
// Divide the countries array into two equal arrays if it is even.
// If countries array is not even, one more country for the first half.
let cl = countries.length
let first, second
if (cl % 2 === 0) {
    first = countries.slice(0, cl / 2)
    second = countries.slice(cl / 2)
} else {
    first = countries.slice(0, Math.ceil(cl / 2))
    second = countries.slice(Math.ceil(cl / 2))
}
console.log(first, second)