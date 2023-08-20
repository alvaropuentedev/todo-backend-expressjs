const Pool = require('pg').Pool

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_PORT = process.env.DB_PORT

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASS,
  port: DB_PORT,
  ssl: {
    sslmode: 'require'
  }
})

module.exports = {
    pool,
  };