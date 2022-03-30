// Declare an empty array;
const arrEmpty = []
console.log("empty array", arrEmpty)
// Declare an array with more than 5 number of elements
const arr1 = [...Array(20).keys()].slice(1)
// Find the length of your array
console.log("arr1 length", arr1.length)
// Get the first item, the middle item and the last item of the array
const logFirstLastAndMid = arr => console.log(`first: ${arr[0]}`, `last: ${arr[arr.length - 1]}`, `mid: ${arr[arr.length >> 1]}`)
logFirstLastAndMid(arr1)
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, "abc", {"obj": 2}, [3, 4, 5], "end", 0]
console.log("mixedDataTypes length", mixedDataTypes.length)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = " Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",").map(x => x.trim())
// Print the array using console.log()
console.log("itCompanies", itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
logFirstLastAndMid(itCompanies)
// Print out each company
itCompanies.forEach((v, i) => console.log(i + 1, v))
// Change each company name to uppercase one by one and print them out
itCompanies.forEach((v, i) => console.log(i + 1, v.toUpperCase()))
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(`${itCompanies.slice(0, itCompanies.length - 1).join(", ")} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`)
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const checkCompExist = x => itCompanies.includes(x) ? x : "404"
console.log("has google: ", checkCompExist("Google"))
console.log("has KFC: ", checkCompExist("KFC"))
// Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
    if ((itCompanies[i].match(/o/g) || []).length > 1) {
        console.log(itCompanies[i])
    }
}
// Sort the array using sort() method
console.log(itCompanies.slice().sort())
// Reverse the array using reverse() method
console.log(itCompanies.slice().reverse())
// Make sure original array not change
console.log("original: ", itCompanies)
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice().reverse().slice(0, 3).reverse())
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(itCompanies.length >> 1, (itCompanies.length >> 1) + 1))
// Remove the first IT company from the array
itCompanies.splice(0, 1)
console.log(itCompanies)
// Remove the middle IT company or companies from the array
itCompanies.splice((itCompanies.length >> 1) - (itCompanies.length % 2 ? 0 : 1), itCompanies.length % 2 ? 1 : 2)
console.log(itCompanies)
// Remove the last IT company from the array
itCompanies.splice(itCompanies.length-1,1)
console.log(itCompanies)
// Remove all IT companies
itCompanies.splice(0)
console.log(itCompanies)