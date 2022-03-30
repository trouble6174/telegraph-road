const rectangle = {w: 20, h: 10}
const calculateArea = ({w, h}) => w * h

console.log(calculateArea(rectangle))


const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

function getPersonInfo(p) {
    const {firstName, lastName, age, country, job, skills, languages: [l1, l2, l3]} = p
    console.log(
        `%c${firstName} ${lastName} lives in ${country}. 
He is ${age} years old. He is an ${job}. 
He teaches ${skills.slice(0, -1).join(", ")} and ${skills.slice(-1)}. 
He speaks ${l1}, ${l2} and a little bit of ${l3}.`, "color:blue;font-weight:bolder")
}

getPersonInfo(person)


