// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
const fullName = (fn, ln) => fn + " " + ln
console.log("%c" + fullName("John", "Wick"), "color:red;font-weight:bolder")

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (x, y) => x + y
console.log(addNumbers(2, 2))

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
const calcArea = r => (Math.PI * r * r).toFixed(4)
console.log("radius 2, area ", calcArea(2))

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelsiusToFahrenheit.
const celsiusToFahrenheit = c => ((c * 9 / 5) + 32).toFixed(2)
console.log(celsiusToFahrenheit(7))

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
const calcBMI = (w, h) => (w / (h * h / 10000)).toFixed(2)
console.log(calcBMI(95, 180))

