//Write a code which can give grades to students according to theirs scores
function checkGrade(score) {
    switch (true) {
        case (score >= 80):
            return "A"
        case (score >= 70):
            return "B"
        case (score >= 60):
            return "C"
        case (score >= 50):
            return "D"
        default:
            return "F"
    }
}

console.log(checkGrade(85))
console.log(checkGrade(75))
console.log(checkGrade(65))
console.log(checkGrade(35))
console.log(checkGrade(115))


function checkSeason(month) {
    switch (month.toLowerCase().trim()) {
        case "september":
        case "october":
        case "november":
            return "Autumn"
        case "december":
        case "january":
        case "february":
            return "Winter"
        case "march":
        case "april":
        case "may":
            return "Spring"
        case "june":
        case "july":
        case "august":
            return "Summer"
        default:
            return "Invalid Month"
    }
}

console.log(checkSeason("june"))
console.log(checkSeason("july"))
console.log(checkSeason("december"))
console.log(checkSeason("october"))
console.log(checkSeason("ff"))

const isWeekend = d => ["saturday", "sunday"].includes(d.toLowerCase())