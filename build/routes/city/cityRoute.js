"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// const client = require('../../config_files/redisConfig')
const cityController_1 = __importDefault(require("./cityController"));
const jwt = require('jsonwebtoken');
const sc = 'sc';
function checkLogin(req, res, next) {
    let token = req.headers['authorization'];
    jwt.verify(token, sc, (error, reply) => {
        if (reply) {
            next();
        }
        else {
            res.json({
                msg: "please login first",
            });
        }
    });
}
router.get("/", checkLogin, cityController_1.default.getCity);
router.post("/", checkLogin, cityController_1.default.createCity);
router.put("/", checkLogin, cityController_1.default.updateCity);
router.delete("/", checkLogin, cityController_1.default.deleteCity);
exports.default = router;
