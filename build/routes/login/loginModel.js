"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configPG_1 = __importDefault(require("../../config_files/configPG"));
exports.default = {
    checkUser
};
async function checkUser({ name, password }) {
    let query = 'select name , password , role from users where name = $1 and password = $2';
    return configPG_1.default.query(query, [name, password]);
}
