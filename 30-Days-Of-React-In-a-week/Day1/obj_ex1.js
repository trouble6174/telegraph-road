// Create an empty object called dog
const dog = {}
// Print the the dog object on the console
console.log(dog, typeof dog)
// Add name, legs, color, age and bark properties for the dog object.
// The bark property is a method which return woof woof
dog.name = "Earth"
dog.legs = 4
dog.color = "blue"
dog.bark = () => "woof woof"
// Get name, legs, color, age and bark value from the dog object
console.log(dog.bark())
console.log(dog)
// Set new properties the dog object: breed, getDogInfo
dog.breed = "planet"
dog.getDogInfo = function () {
    return `${this.name} is a ${this.color} ${this.breed}.`
}
console.log(dog.getDogInfo())