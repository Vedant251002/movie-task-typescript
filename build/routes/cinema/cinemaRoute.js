"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cinemaController_1 = __importDefault(require("./cinemaController"));
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
router.get("/", checkLogin, cinemaController_1.default.getCinema);
router.post("/", checkLogin, cinemaController_1.default.createCinema);
router.put("/", checkLogin, cinemaController_1.default.updateCinema);
router.delete("/", checkLogin, cinemaController_1.default.deleteCinema);
exports.default = router;
