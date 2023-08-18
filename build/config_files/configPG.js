"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { Client } = require('pg');
const pg_1 = require("pg");
const client = new pg_1.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'movie-task',
    password: '2510',
    port: 5432,
});
let connection;
(async () => {
    connection = await client.connect();
})();
exports.default = {
    query: (query, params) => {
        return client.query(query, params);
    }
};
