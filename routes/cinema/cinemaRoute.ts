import express from 'express';
const router = express.Router();
import { Request, Response   } from 'express';

import controllers from './cinemaController';

const jwt = require('jsonwebtoken');
const sc = 'sc'

function checkLogin(req : Request, res : Response, next : Function) {
  let token = req.headers['authorization'];

    jwt.verify(token , sc , (error : Error , reply : Response)  => {
      if (reply) {
        next();
      } else {
        res.json({
          msg: "please login first",
        });
      }
    })
    }

    router.get("/",checkLogin , controllers.getCinema);
    router.post("/", checkLogin , controllers.createCinema);
    router.put("/", checkLogin , controllers.updateCinema);
    router.delete("/",checkLogin ,controllers.deleteCinema);

    export default router;

