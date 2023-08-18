"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ceoModel_1 = __importDefault(require("./ceoModel"));
exports.default = {
    getCity,
    getCinema,
    getMovie,
    getSeating,
    getTop10,
    released,
    wealthyuser,
    bookings,
    booked_users,
    who_booked
};
async function getCity(req, res) {
    let { rows } = await ceoModel_1.default.getCity(req.params.city);
    res.json(rows);
}
async function getCinema(req, res) {
    let { rows } = await ceoModel_1.default.getCinema(req.params.cinema);
    res.json(rows);
}
async function getMovie(req, res) {
    let { rows } = await ceoModel_1.default.getMovie(req.params.movie);
    res.json(rows);
}
;
async function getSeating(req, res) {
    let { rows } = await ceoModel_1.default.seatDb(req.body);
    res.json(rows);
}
;
async function getTop10(req, res) {
    let { rows } = await ceoModel_1.default.top10Db();
    res.json(rows);
}
;
async function released(req, res) {
    let year = req.params.year;
    let { rows } = await ceoModel_1.default.releaseDateDb(year);
    res.json(rows);
}
;
async function wealthyuser(req, res) {
    let { rows } = await ceoModel_1.default.wealthyUserDb();
    res.json(rows);
}
;
async function bookings(req, res) {
    let { rows } = await ceoModel_1.default.bookingDb();
    res.json(rows);
}
;
async function booked_users(req, res) {
    let { rows } = await ceoModel_1.default.booked_usersDb();
    res.json(rows);
}
;
async function who_booked(req, res) {
    let query = req.body;
    let { rows } = await ceoModel_1.default.who_bookedDb(query);
    res.json(rows);
}
;
