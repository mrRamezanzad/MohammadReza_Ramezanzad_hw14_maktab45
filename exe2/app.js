const express = require("express"),
    app = express(),
    path = require("path"),
    authorizationRoutes = require(path.join(__dirname, "/routes/authorization.js"))

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.send("started exercise")
})

//using routes 
app.use("/authorization", authorizationRoutes)

app.get("*", (req, res) => {
    res.render(path.join(__dirname, "/views/404"))
})

app.listen(80, () => {
    console.log("server started on: http://localhost:80");
})