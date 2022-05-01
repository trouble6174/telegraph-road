const nodeCmd = require("node-cmd");
import express from "express";
const app = express();
const router = express.Router();

app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", "views");

router.get("/", (req, res, next) => {
  const data = nodeCmd.runSync("wsl hostname -I");
  console.log(data.data)
  return res.status(200).send(data.data);
});

export = router;
