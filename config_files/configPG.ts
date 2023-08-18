// const { Client } = require('pg');
import {Client} from 'pg';
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'movie-task',
  password: '2510',
  port: 5432,
})

let connection;
(async()=>{
     connection = await client.connect();
})();

export default {
  query : (query : string, params : string[]) => {

    return client.query(query , params )
  }
};