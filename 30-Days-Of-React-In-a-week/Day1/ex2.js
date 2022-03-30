//Create a separate countries.js file and store the countries array into this file,
//create a separate file web_techs.js and store the constWebTechs array into this file.
// Access both file in main.js file
import {constWebTechs} from "./constWebTechs.js";
import {countries} from "./constCountries.js";

console.log(constWebTechs)
console.log(countries)

//First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.match(/\w+/g)
console.log(words)
console.log(words.length)

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log("original array", shoppingCart)
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat")
console.log("add meat at the beginning", shoppingCart)
// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar")
}
console.log("append sugar", shoppingCart)
// remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
console.log("remove honey", shoppingCart)
// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = 'Green Tea'
console.log("Tea to Green Tea", shoppingCart)

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.
console.log("original countries", countries)
if (countries.includes("Ethiopia")) {
    console.log("Ethiopia".toUpperCase())
} else {
    countries.push("Ethiopia")
}

// In the constWebTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.
console.log("original constWebTechs", constWebTechs)
if (constWebTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess")
} else {
    constWebTechs.push("Sass")
    console.log(constWebTechs)
}

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log("fullStack", fullStack)