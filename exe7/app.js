const express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    path = require("path"),
    product = require(path.join(__dirname, "/routes/product.js")),
    pages = require(path.join(__dirname, "/routes/pages.js"))

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use("/", pages)
app.use("/product", product)



app.get("*", (req, res) => {
    res.send("404")
})

app.listen(80, () => {
    console.log(`started at: http://localhost:80`);
})