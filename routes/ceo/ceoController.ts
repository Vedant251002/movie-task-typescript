import models from './ceoModel';
// const models = require('./ceoModel.js')
import { Request, Response   } from 'express';


export default {
  getCity,
  getCinema,
  getMovie,
  getSeating,
  getTop10,
  released,
  wealthyuser,
  bookings,
  booked_users,
  who_booked
}

async function getCity(req : Request,res : Response){
  let {rows} = await models.getCity(req.params.city)
  res.json(rows);
}

async function getCinema(req : Request,res : Response){
  let {rows} = await models.getCinema( req.params.cinema)
  res.json(rows);
}


async function getMovie (req : Request,res : Response)  {
  let {rows} = await models.getMovie( req.params.movie)
  res.json(rows);
};

async function getSeating(req : Request,res : Response) {
  let {rows} = await models.seatDb(req.body)
  res.json(rows);
};

async function getTop10(req : Request,res : Response) {
  let {rows} = await models.top10Db()
  res.json(rows);
};

 async function released(req : Request,res : Response) {
  let year = req.params.year;
  let {rows} = await models.releaseDateDb(year)
  res.json(rows);
};

async function wealthyuser(req : Request,res : Response)  {
  let {rows} = await models.wealthyUserDb()
  res.json(rows);
};

async function bookings (req : Request,res : Response)  {
  let {rows} = await models.bookingDb();
  res.json(rows);
};

async function booked_users(req : Request,res : Response)  {
  let {rows} = await models.booked_usersDb();
  res.json(rows);
};

async function who_booked (req : Request,res : Response) {
  let query = req.body;
  let {rows} = await models.who_bookedDb(query)
  res.json(rows);
};
