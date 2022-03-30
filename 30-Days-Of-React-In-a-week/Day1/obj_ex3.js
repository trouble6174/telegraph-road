const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Mi',
        price: 200,
        ratings: [
            {userId: 'fg12cy', rate: 5},
            {userId: 'zwf8md', rate: 4.5},
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{userId: 'fg12cy', rate: 5}],
        likes: ['fg12cy'],
    },
]

const makeId = (x) => (Math.random() + 1).toString(36).substr(2, x)
const nowDate = () => (new Date()).toLocaleDateString('en-US',
    {hour: 'numeric', minute: 'numeric'}).replace(",", "")

//Create a function called signUp which allows user to add to the collection.
//If user exists, inform the user that he has already an account
function sighUp(username, password, email) {
    if (username.length < 5 || password.length < 5 || email.length < 6) {
        return "Invalid Info"
    }
    for (const user of users) {
        if (user.username === username) {
            return `${username} already has an account`
        }
    }
    users.push(
        {
            _id: makeId(6), username: username, password: password, email: email,
            createdAt: nowDate(), isLoggedIn: false
        }
    )
    return "ok"
}

console.log(sighUp("test11", "agraerg", "eagda@fdasg.cf"))
console.log(users)
console.log(sighUp("test11", "agraerg", "eagda@fdasg.cf"))

// Create a function called signIn which allows user to sign in to the application
function sighIn(username, password) {
    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        if (user.username === username && user.password === password) {
            users[i].isLoggedIn = true
            return `login ok`
        }
    }
    return "username or password invalid"
}

console.log(sighIn("test11", "agraerg"))

function getUser(username) {
    for (let user of users) {
        if (user.username === username) {
            return user
        }
    }
}

function updateRating(product, rate, user) {
    let ratings = []
    for (const u of product.ratings) {
        if (u.userId !== user?._id) {
            ratings.push(u)
        }
    }
    if (user?._id !== undefined && rate !== undefined) {
        ratings.push({userId: user._id, rate: rate})
    }
    product.ratings = ratings
}

function rateProduct(uName, pName, rate) {
    let user = getUser(uName)
    for (let i = 0; i < products.length; i++) {
        let p = products[i]
        if (p.name === pName) {
            updateRating(p, rate, user)
            return `rating ok`
        }
    }
    return "rate error"
}
let ur = getUser("test11")
let pr = products[0]
rateProduct(ur.username, pr.name, 7)
rateProduct(ur.username, pr.name, 10)
rateProduct(undefined, pr.name, 9)
console.log(products)