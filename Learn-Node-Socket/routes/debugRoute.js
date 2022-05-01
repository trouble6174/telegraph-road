"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const nodeCmd = require("node-cmd");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", "views");
router.get("/", (req, res, next) => {
    const data = nodeCmd.runSync("wsl hostname -I");
    console.log(data.data);
    return res.status(200).send(data.data);
});
module.exports = router;
