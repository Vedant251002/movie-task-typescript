"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configPG_1 = __importDefault(require("../../config_files/configPG"));
exports.default = {
    getCinemaDb,
    createCinemaDb,
    updateCinemaDb,
    deleteCinemaDb
};
async function getCinemaDb() {
    let query = `select * from get_cinema_details();`;
    return configPG_1.default.query(query, []);
}
async function createCinemaDb({ code, cinemaName, city, address }) {
    let query = `select add_cinema( $1 ,$2 , $3 , $4);`;
    return configPG_1.default.query(query, [code, cinemaName, city, address]);
}
async function updateCinemaDb({ code, cinemaName, city, address, id }) {
    let query = `update cinema
  set code = $1,
  name = $2,
  city_id = (select id from city where name = "${city}"),
  address = $3
  where id = $4`;
    return configPG_1.default.query(query, [code, cinemaName, address, id]);
}
async function deleteCinemaDb({ id }) {
    let query = `delete from cinema
    where id = $1`;
    return configPG_1.default.query(query, [id]);
}
