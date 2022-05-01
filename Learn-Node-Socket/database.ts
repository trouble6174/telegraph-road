const mongoose = require("mongoose");
const nodeCmd = require("node-cmd");

class Database {
  constructor() {
    this.connect();
  }
  getMongoUrl(): string {
    const host = nodeCmd.runSync("wsl hostname -I");
    return `mongodb://${host.data.trim()}:27017/`;
  }
  connect() {
    mongoose
      .connect(this.getMongoUrl(), {
        user: "lc",
        pass: "123123",
        dbName: "twicl",
        authSource: "admin",
      })
      .then(() => {
        console.log("db connect");
      })
      .catch((err: Error) => {
        console.log("db connect err " + err);
      });
  }
}

export const db = new Database();
