const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/", (req, res) => {
    res.redirect("/home")
})
router.get("/home", (req, res) => {
    res.render("index")
})
router.get("/about", (req, res) => {
    res.render("about")
})
router.get("/contact", (req, res) => {
    res.render("contact")
})

module.exports = router