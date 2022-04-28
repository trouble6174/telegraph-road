"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(2, 5));
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["RO"] = 1] = "RO";
    Role[Role["RW"] = 2] = "RW";
    Role[Role["RWX"] = 3] = "RWX";
})(Role || (Role = {}));
const me = {
    name: "lc",
    age: 34,
    hobbies: ["metal", "paint"],
    role: Role.ADMIN,
};
console.log(me);
var NumRole;
(function (NumRole) {
    NumRole[NumRole["RWX"] = 7] = "RWX";
    NumRole[NumRole["RW"] = 6] = "RW";
})(NumRole || (NumRole = {}));
function concat(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
// this is weird
function printResult(n) {
    console.log("hi", n);
}
function printResultMKII(n) {
    console.log("hi", n);
    return;
}
let anyFunctionValue;
anyFunctionValue = add;
anyFunctionValue = printResult;
let strictFunctionValue;
strictFunctionValue = add;
//  strictFunctionValue = printResult; // of course, this will not going through compile
// callback type
function addAndCallback(n1, n2, cb) {
    const res = n1 + n2;
    cb(res);
}
// callback functions can return something,
// even if the argument on which they're passed does NOT expect a returned value.
// can change void to "any", but will error if change void to number, string, Function, etc.
function sendRequest(data, cb) {
    return cb({ data: "Hi there!" });
}
sendRequest("Send this!", (response) => {
    console.log(response);
    return true;
});
let userInput;
let userName;
userInput = 5;
userInput = "str";
// userName = userInput; // compile error, change unknown to any can fix
// unknown force you do type check, someway better than any
if (typeof userInput == "string") {
    userName = userInput;
}
function generateError(msg, code) {
    throw { msg, code };
    //   while (true) {}
}
generateError("cn", 500);
//# sourceMappingURL=app.js.map