"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose = require("mongoose");
const nodeCmd = require("node-cmd");
class Database {
    constructor() {
        this.connect();
    }
    getMongoUrl() {
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
            .catch((err) => {
            console.log("db connect err " + err);
        });
    }
}
exports.db = new Database();
