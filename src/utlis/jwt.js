const fs = require("fs")
const path = require("path")
const { createHash } = require("crypto")
const jwt = require("jsonwebtoken")

const privateKey = fs.readFileSync(path.resolve(__dirname, "../keys/private.key"), {encoding: "utf-8"})
const publicKey = fs.readFileSync(path.resolve(__dirname, "../keys/public.key"), {encoding: "utf-8"})

function getToken(payload) {
  return jwt.sign(payload, privateKey, {
    algorithm: "HS256",
    expiresIn: 1000 * 60 * 30
  })
}

function verifyToken(token) {
  try {
    const payload = jwt.verify(token, publicKey, {
      algorithms: ["HS256"]
    })
    return {
      isError: false,
      payload: payload
    }
  } catch (error) {
    return {
      isError: true,
      error: error
    }
  }
}

function decodePassword(password) {
  return createHash("sha256").update(password).digest("hex")
}

module.exports = {
  getToken,
  verifyToken,
  decodePassword
}