"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ceoController_1 = __importDefault(require("./ceoController"));
const jwt = require('jsonwebtoken');
const sc = 'sc';
function checkLogin(req, res, next) {
    let token = req.headers['authorization'];
    jwt.verify(token, sc, (error, user) => {
        if (user) {
            next();
        }
        else {
            res.json({
                msg: "please login first",
            });
        }
    });
}
function checkAdmin(req, res, next) {
    let token = req.headers['authorization'];
    jwt.verify(token, sc, (error, user) => {
        if (user.role == 'admin') {
            next();
        }
        else {
            res.json({
                msg: 'user not authorised'
            });
        }
    });
}
router.get("/city/:city", checkLogin, checkAdmin, ceoController_1.default.getCity);
router.get("/cinema/:cinema", checkLogin, checkAdmin, ceoController_1.default.getCinema);
router.get("/movie/:movie", checkLogin, checkAdmin, ceoController_1.default.getMovie);
router.get("/seating_plan/", checkLogin, checkAdmin, ceoController_1.default.getSeating);
router.get('/top10', checkLogin, checkAdmin, ceoController_1.default.getTop10);
router.get("/released/:year", checkLogin, checkAdmin, ceoController_1.default.released);
router.get("/wealthyuser/", checkLogin, checkAdmin, ceoController_1.default.wealthyuser);
router.get("/bookings/", checkLogin, checkAdmin, ceoController_1.default.bookings);
router.get("/booked_users/", checkLogin, checkAdmin, ceoController_1.default.booked_users);
router.get("/who_booked/", checkLogin, checkAdmin, ceoController_1.default.who_booked);
exports.default = router;
