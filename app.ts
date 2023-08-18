// var createError = require("http-errors");
// var express = require("express");
import express from 'express';
import { Request, Response   } from 'express';
// var path = require("path");
// var session = require("express-session");

// var cityApi = require("./routes/city/cityRoute.js");
// var cinemaApi = require("./routes/cinema/cinemaRoute.js");
// const ceoApi = require("./routes/ceo/ceoRoute.js");
// const login = require("./routes/login/loginRoute.js");
// const readApi = require('./csv_files/readCSV.js');
import login from './routes/login/loginRoute';
import cinemaApi from './routes/cinema/cinemaRoute';
import cityApi from './routes/city/cityRoute';
var app = express();

// app.use(session({ secret: "Shh, its a secret!" }));
// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

app.use("/login", login);
app.use("/city", cityApi);
app.use("/cinema", cinemaApi);
// app.use("/ceo", ceoApi);
// app.use('/readcsv' , readApi)

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err :Error, req : Request, res : Response, next : Function) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
//   res.status(err.status || 500);
  res.render("error");
});

app.listen(3000);
// module.exports = app;
