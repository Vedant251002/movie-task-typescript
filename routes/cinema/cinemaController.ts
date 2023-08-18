// const models = require("./cinemaModel");
import models from './cinemaModel'
import { Request, Response   } from 'express';



export default {
  getCinema,
  createCinema,
  updateCinema,
  deleteCinema
}

 
async function getCinema (req :Request , res : Response)  {
  let {rows} = await models.getCinemaDb();
  res.json(rows);
};


async function createCinema(req : Request, res : Response)  {
  await models.createCinemaDb(req.query);

  res.json({
    msg : "done"
  });
};

async function updateCinema (req : Request, res : Response)  {
  await models.updateCinemaDb(req.query);
  res.json({
    msg : "done"
  });
};

  async function deleteCinema (req : Request, res : Response)  {
  await models.deleteCinemaDb(req.query)
  res.json({
    msg : "done"
  });
};


