import express from 'express';
const router = express.Router();
import { Request, Response   } from 'express';

import controllers from './ceoController';
const jwt = require('jsonwebtoken');
const sc = 'sc'

function checkLogin(req : Request, res : Response, next  :Function) {
  let token = req.headers['authorization'];

    jwt.verify(token , sc , (error : Error , user : {name : string , password : string}) => {
      if (user ) {

        next();
      } else {
        res.json({
          msg: "please login first",
        });
      }
    })
    }
function checkAdmin(req : Request,res : Response,next : Function){
  let token = req.headers['authorization'];

  jwt.verify(token , sc , (error : Error , user: {name : string , password : string , role : string}  ) => {
  if(user.role == 'admin'){
    next()
  }else{
    res.json({
      msg : 'user not authorised'
    })
  }
  })
}

router.get("/city/:city", checkLogin , checkAdmin, controllers.getCity);
router.get("/cinema/:cinema", checkLogin ,checkAdmin , controllers.getCinema);
router.get("/movie/:movie", checkLogin, checkAdmin , controllers.getMovie)
router.get("/seating_plan/", checkLogin,  checkAdmin, controllers.getSeating);
router.get('/top10',checkLogin, checkAdmin ,controllers.getTop10)
router.get("/released/:year", checkLogin, checkAdmin , controllers.released);
router.get("/wealthyuser/", checkLogin, checkAdmin , controllers.wealthyuser);
router.get("/bookings/",checkLogin, checkAdmin , controllers.bookings);
router.get("/booked_users/",checkLogin, checkAdmin , controllers.booked_users);
router.get("/who_booked/",checkLogin, checkAdmin , controllers.who_booked);

export default router;