// const connection = require('../../config_files/configPG')
import { QueryResult } from 'pg';
import connection from '../../config_files/configPG';

export default {
    checkUser
}
interface userData {
    name : string,
    password : string,
    role : string
}
async function checkUser({name,password} : {name : string , password : string}) : Promise<QueryResult<userData>>{
    let query = 'select name , password , role from users where name = $1 and password = $2'
    return connection.query(query,[name , password]);
}