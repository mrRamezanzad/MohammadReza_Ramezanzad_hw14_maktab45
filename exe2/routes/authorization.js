const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/", (req, res) => {
    res.render(path.join(__dirname, "../views/authorization.ejs"))
})
router.post("/:type", (req, res) => {
    // res.render(path.join(__dirname, "../views/authorization.ejs"))
    res.send(req.params.type)
})
router.post("/:type", (req, res) => {
    // res.render(path.join(__dirname, "../views/authorization.ejs"))
    res.send(req.params.type)
})

module.exports = router