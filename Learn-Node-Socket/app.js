"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const middleware = __importStar(require("./middleware"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const db = require("./database");
const app = (0, express_1.default)();
const port = 5005;
const server = app.listen(port, () => console.log(`listening on port ${port}`));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// The session store instance, defaults to a new MemoryStore instance.
// TODO, not for production
app.use((0, express_session_1.default)({
    secret: "not-A-secret",
    resave: false,
    saveUninitialized: false,
}));
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", "views");
app.use(body_parser_1.default.urlencoded({ extended: false }));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const loginRoutes_2 = __importDefault(require("./routes/loginRoutes"));
const registerRoutes_1 = __importDefault(require("./routes/registerRoutes"));
app.use("/login", loginRoutes_1.default);
app.use("/logout", loginRoutes_1.default);
app.use("/debug", loginRoutes_2.default);
app.use("/register", registerRoutes_1.default);
app.get("/", middleware.requireLogin, (req, res) => {
    const payload = { pageTitle: "hello", userLoggedIn: req.session.user };
    res.status(200).render("home", payload);
});
