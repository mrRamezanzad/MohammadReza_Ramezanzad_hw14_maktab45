const express = require("express"),
    router = express.Router(),
    path = require("path"),
    fs = require("fs")

// let users = fs.readFileSync(path.join(__dirname, "../DB/users.jso, "utf8"n"))


// ============= login page routes
router.get("/login", (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"))
})

router.post("/login", (req, res) => {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../DB/users.json"), "utf8"))
    let userInfo = req.body
    if (loginUser(userInfo)) {
        let userIndex = users.findIndex(user => user.username === userInfo.username)
        users[userIndex].isLoggedIn = "true"
        fs.writeFile(path.join(__dirname, "../DB/users.json"), JSON.stringify(users), (err) => {
            if (err) console.log(err);
            res.status(200).json(`{"msg": "خوش آمدید!", "uid": ${users[userIndex].id}}`)
        })

    } else res.status(400).json(`{"msg": "کاربری با این مشخصات یافت نشد!"}`)
})

// login functionality
function loginUser(userInfo) {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../DB/users.json"), "utf8"))
    let targetUser = users.find(user => user.username === userInfo.username && user.password === userInfo.password)
    return targetUser === undefined ? false : true
}

// ============= sign up page routes
router.get("/signup", (req, res) => {
    res.render(path.join(__dirname, "../views/signup.ejs"))
})

router.post("/signup", (req, res) => {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../DB/users.json"), "utf8"))
    let newUserInfo = req.body
    // console.log("signup route", createUser(newUserInfo));
    if (createUser(newUserInfo)) {
        res.status(201).json({
            "msg": "اکانت شما با موفقیت ساخته شد."
        })
    } else {
        res.status(401).json({
            "msg": "کاربری با این مشخصات وجود دارد!"
        })
    }
})

// user creation functionality
function createUser(newUserInfo) {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../DB/users.json"), "utf8"))
    newUserInfo.id = generateId()
    console.log("full new User: ", newUserInfo);
    console.log("available", availableNewUser(newUserInfo));
    if (availableNewUser(newUserInfo)) {
        users.push(newUserInfo)
        users = fs.writeFileSync(path.join(__dirname, "../DB/users.json"), JSON.stringify(users))
        return true
    } else return false
}

function availableNewUser(newUserInfo) {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../DB/users.json"), "utf8"))
    // console.log("check available", users.findIndex(user => user.id === newUserInfo.id || user.username === newUserInfo.username));
    return users.findIndex(user => user.id === newUserInfo.id || user.username === newUserInfo.username) === -1 ?
        true : false
}

function generateId() {
    return (Math.random() * Math.random() * 1000000000).toFixed()
}

router.get("/profile/:id", (req, res) => {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../DB/users.json"), "utf8")),
        targetUser = users.find(user => {
            return parseInt(user.id) === parseInt(req.params.id)
        })

    res.render("profile", {
        user: targetUser
    })
})


module.exports = router