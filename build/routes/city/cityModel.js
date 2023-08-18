"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configPG_1 = __importDefault(require("../../config_files/configPG"));
exports.default = {
    getCityDb,
    createCityDb,
    updateCityDb,
    deleteCityDb
};
async function getCityDb() {
    let query = `select * from city;`;
    return configPG_1.default.query(query, []);
}
async function createCityDb({ city, state }) {
    let query = `select add_city( $1 ,  $2);`;
    return configPG_1.default.query(query, [city, state]);
}
async function updateCityDb({ city, state, id }) {
    let query = `select update_city($1 , $2 , $3)`;
    return configPG_1.default.query(query, [city, state, id]);
}
async function deleteCityDb({ id }) {
    let query = `select delete_city($1);`;
    return configPG_1.default.query(query, [id]);
}
