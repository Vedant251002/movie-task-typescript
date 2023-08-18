import express from 'express';
import { Request, Response   } from 'express';
const router = express.Router();
// const client = require('../../config_files/redisConfig')
import controllers from './cityController'
const jwt = require('jsonwebtoken');
const sc = 'sc'

function checkLogin(req :Request, res : Response, next : Function) {
  let token = req.headers['authorization'];

    jwt.verify(token , sc , (error : Error , reply : Response) => {
      if (reply) {
        next();
      } else {
        res.json({
          msg: "please login first",
        });
      }
    })
    }

router.get("/", checkLogin,controllers.getCity);
router.post("/", checkLogin, controllers.createCity);
router.put("/",checkLogin , controllers.updateCity);
router.delete("/",checkLogin , controllers.deleteCity);


export default router;