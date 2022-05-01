import express from "express";
import bcrypt from "bcrypt";
const app = express();
const router = express.Router();
import User from "../schemas/UserSchema";

app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", "views");

router
  .get("/", (req, res) => {
    res.status(200).render("login");
  })
  .post("/", async (req, res) => {
    const username = req.body.username?.trim();
    const email = req.body.email?.trim();
    const password = req.body.password;
    const user = await User.findOne({ $or: [{ username }, { email }] }).catch(
      (err) => {
        return res
          .status(200)
          .render("login", { errorMsg: "make sure all input valid" });
      }
    );
    if (!user) {
      return res.status(200).render("login", { errorMsg: "user not found" });
    } else {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result === true) {
        req.session.user = user;
        return res.redirect("/");
      }
      return res
        .status(200)
        .render("login", { errorMsg: "incorrect password" });
    }
  });

export = router;
