const express = require("express"),
    app = express(),
    path = require("path")

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "pubic")))

app.get("/", (req, res) => {
    res.send("started exercise")
})

app.get("*", (req, res) => {
    res.render(path.join(__dirname, "/views/404"))
})

app.listen(80, () => {
    console.log("server started on: http://localhost:80");
})