const fs = require("fs")
const path = require("path")

const Koa = require("koa")
const koaBodyParser = require("koa-bodyparser")

const app = new Koa()

app.use(koaBodyParser())

const fileList = fs.readdirSync(path.resolve(__dirname, "../router"))

fileList.forEach(file => {
  const router = require(path.resolve(__dirname, `../router/${file}`))
  app.use(router.allowedMethods())
  app.use(router.routes())
})

app.on("error", require("./handle.error"))

module.exports = app