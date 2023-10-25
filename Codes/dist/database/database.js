"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
class DataBase {
    constructor() { }
    createDataBase(name) {
        this.connectToDatabase();
        return new Promise((result, reject) => {
            this.dataBaseConnection.query(`CREATE DATABASE IF NOT EXISTS ${name}`, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    result(data);
                }
            });
        });
    }
    connectToDatabase() {
        this.dataBaseConnection = mysql2_1.default.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: "root"
        });
    }
}
exports.DataBase = DataBase;
