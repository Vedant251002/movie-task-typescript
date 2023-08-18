// const connection = require("../../config_files/configPG.js");
import { QueryResult } from 'pg';
import connection from '../../config_files/configPG'
export default {
    getCinemaDb,
    createCinemaDb,
    updateCinemaDb,
    deleteCinemaDb
}

async function getCinemaDb(): Promise<QueryResult>{
 let query = `select * from get_cinema_details();`;
  return connection.query(query,[]);
}
interface createData {
  code : string,
  cinemaName : string,
  city : string,
  address : string
}
async function createCinemaDb({code,cinemaName,city,address} : createData): Promise<QueryResult>{
  let query = `select add_cinema( $1 ,$2 , $3 , $4);`;
    return connection.query(query , [code , cinemaName , city , address]);
}
interface updateData {
  code : string,
  cinemaName : string,
  city : string,
  address : string,
  id : string
}
async function updateCinemaDb({code , cinemaName , city , address , id} :updateData): Promise<QueryResult>{
  let query = `update cinema
  set code = $1,
  name = $2,
  city_id = (select id from city where name = "${city}"),
  address = $3
  where id = $4`;
 return connection.query(query , [code , cinemaName , address , id]);
}

async function deleteCinemaDb({id} : {id : string}): Promise<QueryResult>{
  let query = `delete from cinema
    where id = $1`;
  return connection.query(query,[id]);
}