

const Joi = require('joi');
import { Request, Response   } from 'express';

interface User {
  name : string,
  password : string
}
function validateUser(user : User)
{
    const JoiSchema = Joi.object({
      
      name: Joi.string()
                  .min(1)
                  .max(10)
                  .required(),
                    
      password: Joi.string()
               .min(1)
               .max(10)
               .required(), 
                
    }).options({ abortEarly: false });
  
    return JoiSchema.validate(user)
}

function checkData(req : Request,res : Response,next : Function):void{
  let user = req.body;
  let response = validateUser(user);
  if(response.error){
    res.json(response.error.details)
  }else{
    next();
  }
}

export default checkData;