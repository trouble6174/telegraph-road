import express from "express";
import bcyrpt from "bcrypt";

const app = express();
const router = express.Router();
import User from "../schemas/UserSchema";

app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", "views");

router
  .get("/", (req, res, next) => {
    res.status(200).render("register");
  })
  .post("/", async (req, res, next) => {
    const firstName = req.body.firstName.trim();
    const lastName = req.body.lastName.trim();
    const username = req.body.username.trim();
    const email = req.body.email.trim();
    const password = req.body.password.trim();
    const payload = req.body;
    if (firstName && lastName && username && email && password) {
      const user = await User.findOne({
        $or: [{ username }, { email }],
      }).catch((err) => {
        payload.errorMsg = `db error ${err}`;
        res.status(200).render("register", payload);
      });

      if (!user) {
        const data = req.body;
        data.password = await bcyrpt.hash(password, 10);
        const user = await User.create(data).catch((err) => {
          payload.errorMsg = `db error ${err}`;
          res.status(200).render("register", payload);
        });
        console.log("user created", user);
        req.session.user = user;
        res.redirect("/");
      } else {
        payload.errorMsg = `${
          user.username === username ? "username" : "email"
        } exists`;
        res.status(200).render("register", payload);
      }
    } else {
      payload.errorMsg = "Make sure each field has a valid value";
      res.status(200).render("register", payload);
    }
  });

export = router;
