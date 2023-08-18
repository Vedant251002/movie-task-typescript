
// const models = require('./loginModel')
import models from './loginModel';
const jwt = require('jsonwebtoken')
const sc = 'sc'
import { Request, Response   } from 'express';

export default {
  makeToken,
}

async function makeToken(req : Request, res : Response) :Promise<void> {
  try {
    let {rows} = await models.checkUser(req.body);
    
    if(rows.length == 1){
      let token = await jwt.sign({name : rows[0].name,role : rows[0].role},sc , {expiresIn : '30s'})
      res.json({
        token ,
      });
    }else{
      res.json({
        msg : 'User not Defined'
      })
    }
  } catch (error) {
    res.json({
      msg: "user not authorised",
    });
  }
}


