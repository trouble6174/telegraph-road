import express from "express";
import path from "path";
import * as middleware from "./middleware";
import bodyParser from "body-parser";
import session from "express-session";

const db = require("./database");
const app = express();
const port = 5005;
const server = app.listen(port, () => console.log(`listening on port ${port}`));
app.use(express.static(path.join(__dirname, "public")));

// The session store instance, defaults to a new MemoryStore instance.
// TODO, not for production
app.use(
  session({
    secret: "not-A-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));

import debugRoute from "./routes/debugRoute";
import loginRoute from "./routes/loginRoutes";
import logoutRoute from "./routes/loginRoutes";
import registerRoute from "./routes/registerRoutes";

app.use("/login", loginRoute);
app.use("/logout", loginRoute);
app.use("/debug", logoutRoute);
app.use("/register", registerRoute);

app.get("/", middleware.requireLogin, (req, res) => {
  const payload = { pageTitle: "hello", userLoggedIn: req.session.user };
  res.status(200).render("home", payload);
});
