console.log("ok..");

let objIdMap = new WeakMap();
let objectCount = 0;
// https://stackoverflow.com/questions/2020670/javascript-object-id
// Using a WeakMap instead of Map ensures that the objects can still be garbage-collected.
function objectId(object: object) {
  if (!objIdMap.has(object)) objIdMap.set(object, ++objectCount);
  return objIdMap.get(object);
}

const obj = {
  username: "sad",
  age: 66,
};

const obj2 = obj;
const copiedObj = { ...obj };

console.log(copiedObj, objectId(obj), objectId(copiedObj), objectId(obj2));

const { username: ChangeVarName, age } = obj;
console.log(ChangeVarName);
