const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// Find the person who has many skills in the users object.
console.log(
    Object.entries(users).sort((x, y) => y[1].skills.length - x[1].skills.length)[0][0]
)


// Count logged in users,count users having greater than equal to 50 points from the following object.
let pCount = 0
for (const k in users) {
    if (users[k].points >= 50) {
        pCount++
    }
}
console.log(pCount)


// Find people who are MERN stack developer from the users object
for (const k in users) {
    if (/.*E.*M.*N.*R.*/.test(users[k].skills.map(k => k[0]).sort().join(""))) {
        console.log("MERN", users[k].skills)
    }
}

// Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users)
copyUsers.LC = {
    email: 'lc@lc.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Golang', 'React', 'Node'],
    age: 34,
    isLoggedIn: false,
    points: 100
}

// Get all keys or properties of users object
console.log(Object.keys(users))

// Get all the values of users object
console.log(Object.values(users))

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
    A: {
        name: "AA",
        capital: "CA",
        populations: 35,
        languages: "LA"
    },
    B: {
        name: "BB",
        capital: "CB",
        populations: 42,
        languages: "LB"
    },
    getInfo: function (key) {
        if (!this.hasOwnProperty(key)) {
            return "not recorded"
        }
        let obj = this[key]
        return `${obj.name} C: ${obj.capital} P: ${obj.populations} L: ${obj.languages}`
    }
}

console.log(countries.getInfo("A"))
console.log(countries.getInfo("FF"))