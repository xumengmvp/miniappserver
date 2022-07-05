const Router = require("koa-router")

const router = new Router({
  prefix: "/api"
})

router.post("/register", ({ request, reponse}, next) => {
  console.log();
})



module.exports = router