const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const sessions = require('express-session');
const mysqlSession = require('express-mysql-session')(sessions);
const db = require('./conf/database')

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const competitionsRouter = require("./routes/competitions");
const categoriesRouter = require("./routes/categories");
const votesRouter = require("./routes/votes");
const selectRouter = require("./routes/select");
const insertRouter = require("./routes/insert");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

var mysqlSessionStore = new mysqlSession(
  {},
  db
);

app.use(
  sessions({
    key: "csid",
    secret: "this is a secret from csc648",
    store: mysqlSessionStore,
    resave: false,
    saveUninitialized: false
  })
);

app.use(
  (req, res, next) => {
    if (req.session.userId) {
      res.locals.logged = true;
    }
    next();
  }
);

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/competitions", competitionsRouter);
app.use("/categories", categoriesRouter);
app.use("/votes", votesRouter);
app.use("/select", selectRouter);
app.use("/insert", insertRouter);

app.get("/", (req, res, next) => {
  res.status(200).send('test working');
});


// catch 404 and forward to error handler
/*
 app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
*/

module.exports = app;
