const {Router} = require("express")
const {get, post, ui, login, loginUI} = require("../controllers/user.controller")
const check = require("../middleware/check")
const route = Router()


route.get("/",get)
route.post("/signup",check,post)
route.get("/ui",ui)
route.get("/login",loginUI)
route.post("/login",login)

module.exports = route