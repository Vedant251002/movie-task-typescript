"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cityModel_1 = __importDefault(require("./cityModel"));
exports.default = {
    getCity,
    createCity,
    updateCity,
    deleteCity
};
async function getCity(req, res) {
    let { rows } = await cityModel_1.default.getCityDb();
    res.json(rows);
}
;
async function createCity(req, res) {
    await cityModel_1.default.createCityDb(req.query);
    res.json({
        msg: 'done'
    });
}
;
async function updateCity(req, res) {
    await cityModel_1.default.updateCityDb(req.query);
    res.json({
        msg: 'done'
    });
}
;
async function deleteCity(req, res) {
    await cityModel_1.default.deleteCityDb(req.query);
    res.json({
        msg: 'done'
    });
}
;
