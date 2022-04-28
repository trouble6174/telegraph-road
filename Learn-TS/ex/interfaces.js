"use strict";
console.log("let's start learn interfaces");
// type PersonX = {
//   name: string;
//   age: number;
//   greet(p: string): void;
// };
let user1;
user1 = {
    name: "LC",
    age: 34,
    greet(p) {
        console.log(p);
    },
};
// user1.age = 4;
user1.greet("hi");
class Human {
    constructor(n, age) {
        this.age = age;
        this.name = n;
    }
    greet(p) {
        console.log(p, this.name);
    }
    method1() { }
}
let h;
h = new Human("one", 111);
// h.name = "$35";
console.log(h);
let addX;
addX = (n1, n2) => n1 + n2;
//# sourceMappingURL=interfaces.js.map