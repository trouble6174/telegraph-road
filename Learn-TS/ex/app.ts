import { TupleType } from "typescript";

function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(2, 5));

enum Role {
  ADMIN,
  RO,
  RW,
  RWX,
}

const me = {
  name: "lc",
  age: 34,
  hobbies: ["metal", "paint"],
  role: Role.ADMIN,
};

console.log(me);

enum NumRole {
  RWX = 7,
  RW = 6,
}

type CustomerType = number | string;

function concat(a: CustomerType, b: CustomerType): CustomerType {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

type User = {
  name: string;
  age: number;
};

type ThisIsAnArray = string[];
type ThisIsATuple = [string, number, number]; // it has length

// this is weird
function printResult(n: number): void {
  console.log("hi", n);
}
function printResultMKII(n: number): undefined {
  console.log("hi", n);
  return;
}

let anyFunctionValue: Function;
anyFunctionValue = add;
anyFunctionValue = printResult;

let strictFunctionValue: (a: number, b: number) => number;
strictFunctionValue = add;
//  strictFunctionValue = printResult; // of course, this will not going through compile

// callback type
function addAndCallback(n1: number, n2: number, cb: (n: number) => void) {
  const res = n1 + n2;
  cb(res);
}

// callback functions can return something,
// even if the argument on which they're passed does NOT expect a returned value.
// can change void to "any", but will error if change void to number, string, Function, etc.
function sendRequest(data: string, cb: (response: any) => void) {
  return cb({ data: "Hi there!" });
}
sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "str";
// userName = userInput; // compile error, change unknown to any can fix
// unknown force you do type check, someway better than any
if (typeof userInput == "string") {
  userName = userInput;
}

function generateError(msg: string, code: number): never {
  throw { msg, code };
//   while (true) {}
}

generateError("cn", 500);
