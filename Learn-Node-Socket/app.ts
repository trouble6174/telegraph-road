console.log("ok");

// import fs = require("fs");

// fs.writeFileSync("text1.txt", "content\nsadf");

import http = require("http");
import demoView = require("./routes");
const server = http.createServer(demoView);
server.listen(5005);
