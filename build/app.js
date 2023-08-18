"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var createError = require("http-errors");
// var express = require("express");
const express_1 = __importDefault(require("express"));
// var path = require("path");
// var session = require("express-session");
// var cityApi = require("./routes/city/cityRoute.js");
// var cinemaApi = require("./routes/cinema/cinemaRoute.js");
// const ceoApi = require("./routes/ceo/ceoRoute.js");
// const login = require("./routes/login/loginRoute.js");
// const readApi = require('./csv_files/readCSV.js');
const loginRoute_1 = __importDefault(require("./routes/login/loginRoute"));
const cinemaRoute_1 = __importDefault(require("./routes/cinema/cinemaRoute"));
const cityRoute_1 = __importDefault(require("./routes/city/cityRoute"));
var app = (0, express_1.default)();
// app.use(session({ secret: "Shh, its a secret!" }));
// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));
app.use("/login", loginRoute_1.default);
app.use("/city", cityRoute_1.default);
app.use("/cinema", cinemaRoute_1.default);
// app.use("/ceo", ceoApi);
// app.use('/readcsv' , readApi)
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    //   res.status(err.status || 500);
    res.render("error");
});
app.listen(3000);
// module.exports = app;
