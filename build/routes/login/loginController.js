"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const models = require('./loginModel')
const loginModel_1 = __importDefault(require("./loginModel"));
const jwt = require('jsonwebtoken');
const sc = 'sc';
exports.default = {
    makeToken,
};
async function makeToken(req, res) {
    try {
        let { rows } = await loginModel_1.default.checkUser(req.body);
        if (rows.length == 1) {
            let token = await jwt.sign({ name: rows[0].name, role: rows[0].role }, sc, { expiresIn: '30s' });
            res.json({
                token,
            });
        }
        else {
            res.json({
                msg: 'User not Defined'
            });
        }
    }
    catch (error) {
        res.json({
            msg: "user not authorised",
        });
    }
}
