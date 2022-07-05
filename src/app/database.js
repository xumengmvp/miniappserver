const mysql2 = require("mysql2")

const { USERNAME, PASSWORD, DATABASE, MYSQLPORT } = require("./config")

const connection = mysql2.createPool({
  user: USERNAME,
  port: MYSQLPORT,
  password: PASSWORD,
  database: DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

connection.getConnection((error, conn) => {
  if (!error) {
    console.log("mysql connection success!")
  } else {
    console.log("mysql connection error!", error.message)
  }
})

module.exports = connection.promise()