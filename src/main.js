const app = require("./app")

const { PORT, HOSTNAME } = require("./app/config")


app.listen(PORT, HOSTNAME,() => {
  console.log(`port:${PORT}`)
  console.log(`hostname:${HOSTNAME}`)
  console.log("start koa server success for miniprogram ...")
})