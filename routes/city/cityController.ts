import models from './cityModel'
import { Request, Response   } from 'express';

export default {
  getCity,
  createCity,
  updateCity,
  deleteCity
}

 async function getCity (req : Request, res : Response)  {
  let {rows} = await models.getCityDb();
  res.json(rows);
};

 async function createCity (req : Request, res : Response)  {
  await models.createCityDb(req.query);
  res.json({
    msg : 'done'
  });
};

 async function updateCity (req : Request, res : Response) {
  await models.updateCityDb(req.query)
  res.json({
    msg : 'done'
  });
};

async function deleteCity (req : Request, res : Response) {
  await models.deleteCityDb(req.query)
  res.json({
    msg : 'done'
  });
};
