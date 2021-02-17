const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/login", (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"))
})

router.get("/signup", (req, res) => {
    res.render(path.join(__dirname, "../views/signup.ejs"))

})


module.exports = router