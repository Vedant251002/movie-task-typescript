
import { QueryResult } from 'pg';
import connection from '../../config_files/configPG'

export default {
    getCityDb,
    createCityDb,
    updateCityDb,
    deleteCityDb
}

async function getCityDb() : Promise<QueryResult>{
    let query = `select * from city;`;
    return connection.query(query,[]);
}

async function createCityDb({city,state} : {city : string , state : string}) : Promise<QueryResult>{
    let query = `select add_city( $1 ,  $2);`;
    return connection.query(query, [city ,state]);
}

async function updateCityDb({city,state,id} : {city : string , state : string , id :string}) : Promise<QueryResult>{
    let query = `select update_city($1 , $2 , $3)`
    return connection.query(query,[city , state , id]);
}

async function deleteCityDb({id} : {id : string}) : Promise<QueryResult>{
    let query = `select delete_city($1);`;
    return connection.query(query , [id]);
}