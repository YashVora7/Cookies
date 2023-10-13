const {Router} = require("express")
const {get, post, ui, login} = require("../controllers/user.controller")
const check = require("../middleware/check")
const route = Router()


route.get("/",get)
route.post("/signup",check,post)
route.get("/ui",ui)
route.post("/login",login)

module.exports = route