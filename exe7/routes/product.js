const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/", (req, res) =>{
    res.send("this is from routes module")
})

    module.exports = router