//Get user input using prompt(“Enter your age:”).
//If user is 18 or older, give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
function checkAge(age = prompt("Enter your age:")) {
    if (age >= 18) {
        console.log("You are old enough to drive")
    } else {
        console.log(`You are left with ${18 - age} years to drive.`)
    }
}

// checkAge()

// Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you).
function compareAge(age = prompt("Enter your age:")) {
    const myAge = 34
    if (Number(age) === myAge) {
        console.log("We are the same age")
        return
    }
    if (age > myAge) {
        console.log(`You are ${age - myAge} years older than me.`)
    } else {
        console.log(`I am ${myAge - age} years older than you.`)
    }
}

// compareAge()

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = 4
let b = 3
console.log(a > b ? 'a bigger' : 'b bigger')
if (a > b) {
    console.log('a bigger')
} else {
    console.log('b bigger')
}

//How do you check, if a number is even or not using JavaScript?
const isEven = x => x % 2 === 0
console.log(6, isEven(6))