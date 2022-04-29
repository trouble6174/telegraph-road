"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("ok");
// import fs = require("fs");
// fs.writeFileSync("text1.txt", "content\nsadf");
const http = require("http");
const demoView = require("./routes");
const server = http.createServer(demoView);
server.listen(5005);
