//PG database client/connection setup
const path = require("path");

const { Pool } = require("pg");
const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../.env." + ENV);

require("dotenv").config({ path: PATH });

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

const db = new Pool(dbParams);

db.connect(() => {
  console.log(`database is connected to ${ENV}`);
});

module.exports = db;
