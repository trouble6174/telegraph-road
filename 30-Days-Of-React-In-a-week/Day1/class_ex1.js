class Animal {
    constructor(name, age, color, legs = 2) {
        this.name = name
        this.age = age;
        this.color = color
        this.legs = legs
    }

    getInfo() {
        return `name: ${this.name} age: ${this.age} legs: ${this.legs} color: ${this.color}`
    }
}

class Dog extends Animal {
    constructor(name, age, color, legs = 4, hair) {
        super(name, age, color, legs);
        this.hair = hair
    }

    getInfo() {
        return `name: ${this.name} age: ${this.age} legs: ${this.legs} color: ${this.color} hair: ${this.hair}`
    }
}

const d = new Dog("earth", 4600000, "blue", 0, "long")
console.log(d.getInfo())