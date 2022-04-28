"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("n1");
const input2 = document.getElementById("n2");
function add(n1, n2) {
    return n1 + n2;
}
button.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value));
});
//# sourceMappingURL=ex1.js.map