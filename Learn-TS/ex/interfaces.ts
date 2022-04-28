console.log("let's start learn interfaces");

interface Person {
  name: string;
  gender?: string;
  readonly age: number;
  greet(p: string): void;
}

// type PersonX = {
//   name: string;
//   age: number;
//   greet(p: string): void;
// };

let user1: Person;
user1 = {
  name: "LC",
  age: 34,
  greet(p: string) {
    console.log(p);
  },
};
// user1.age = 4;
user1.greet("hi");

interface Greetable {
  readonly name: string;
  greet(p: string): void;
}

class Human implements Greetable {
  name: string;
  constructor(n: string, public age: number) {
    this.name = n;
  }
  greet(p: string): void {
    console.log(p, this.name);
  }
  method1() {}
}

let h: Greetable;
h = new Human("one", 111);
// h.name = "$35";
console.log(h);

interface AddFn {
  (a: number, b: number): number;
}
let addX: AddFn;

addX = (n1: number, n2: number) => n1 + n2;
