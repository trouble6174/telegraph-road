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
    .get("/", (req, res, next) => {
    res.status(200).render("register");
})
    .post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const firstName = req.body.firstName.trim();
    const lastName = req.body.lastName.trim();
    const username = req.body.username.trim();
    const email = req.body.email.trim();
    const password = req.body.password.trim();
    const payload = req.body;
    if (firstName && lastName && username && email && password) {
        const user = yield UserSchema_1.default.findOne({
            $or: [{ username }, { email }],
        }).catch((err) => {
            payload.errorMsg = `db error ${err}`;
            res.status(200).render("register", payload);
        });
        if (!user) {
            const data = req.body;
            data.password = yield bcrypt_1.default.hash(password, 10);
            const user = yield UserSchema_1.default.create(data).catch((err) => {
                payload.errorMsg = `db error ${err}`;
                res.status(200).render("register", payload);
            });
            console.log("user created", user);
            req.session.user = user;
            res.redirect("/");
        }
        else {
            payload.errorMsg = `${user.username === username ? "username" : "email"} exists`;
            res.status(200).render("register", payload);
        }
    }
    else {
        payload.errorMsg = "Make sure each field has a valid value";
        res.status(200).render("register", payload);
    }
}));
module.exports = router;
