const path = require("path")

const Router = require("koa-router")

const { v4: uuidv4 } = require("uuid")

const multer = require("koa-multer")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads")
  },
  filename: function(req, file, cb) {
    const filename = uuidv4() + path.extname(file.originalname)
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

const router = new Router({
  prefix: "/api"
})

router.post("/upload", upload.single("file"), ({ request, response, req }, next) => {})



module.exports = router