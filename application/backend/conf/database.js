const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql2");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DATABASE_IP,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  debug: false,
});

const promisePool = pool.promise();

module.exports = promisePool;
