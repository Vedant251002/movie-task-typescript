"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const models = require("./cinemaModel");
const cinemaModel_1 = __importDefault(require("./cinemaModel"));
exports.default = {
    getCinema,
    createCinema,
    updateCinema,
    deleteCinema
};
async function getCinema(req, res) {
    let { rows } = await cinemaModel_1.default.getCinemaDb();
    res.json(rows);
}
;
async function createCinema(req, res) {
    await cinemaModel_1.default.createCinemaDb(req.query);
    res.json({
        msg: "done"
    });
}
;
async function updateCinema(req, res) {
    await cinemaModel_1.default.updateCinemaDb(req.query);
    res.json({
        msg: "done"
    });
}
;
async function deleteCinema(req, res) {
    await cinemaModel_1.default.deleteCinemaDb(req.query);
    res.json({
        msg: "done"
    });
}
;
