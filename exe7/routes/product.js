const express = require("express"),
    router = express.Router(),
    path = require("path")

router.get("/:productId", (req, res) =>{
    res.send(req.params.productId)
})

    module.exports = router