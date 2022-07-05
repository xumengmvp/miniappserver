const env = require("dotenv")

env.config()


module.exports = {
  PORT,
  HOSTNAME,
  USERNAME,
  MYSQLPORT,
  DATABASE,
  PASSWORD
} = process.env