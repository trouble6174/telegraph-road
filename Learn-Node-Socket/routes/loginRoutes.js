"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
const UserSchema_1 = __importDefault(require("../schemas/UserSchema"));
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", "views");
router
    .get("/", (req, res) => {
    res.status(200).render("login");
})
    .post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const username = (_a = req.body.username) === null || _a === void 0 ? void 0 : _a.trim();
    const email = (_b = req.body.email) === null || _b === void 0 ? void 0 : _b.trim();
    const password = req.body.password;
    const user = yield UserSchema_1.default.findOne({ $or: [{ username }, { email }] }).catch((err) => {
        return res
            .status(200)
            .render("login", { errorMsg: "make sure all input valid" });
    });
    if (!user) {
        return res.status(200).render("login", { errorMsg: "user not found" });
    }
    else {
        const result = yield bcrypt_1.default.compare(req.body.password, user.password);
        if (result === true) {
            req.session.user = user;
            return res.redirect("/");
        }
        return res
            .status(200)
            .render("login", { errorMsg: "incorrect password" });
    }
}));
module.exports = router;
