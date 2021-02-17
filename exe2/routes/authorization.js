const express = require("express"),
    router = express.Router(),
    path = require("path"),
    fs = require("fs"),
    users = require(path.join(__dirname, "../DB/users.json"))


// ============= login page routes
router.get("/login", (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"))
})

router.post("/login", (req, res) => {
    let userInfo = req.body
    if (loginUser(userInfo)) {
        let userIndex = users.findIndex(user => user.username === userInfo.username)
        users[userIndex].isLoggedIn = true
        fs.writeFile(path.join(__dirname, "../DB/users.json"), JSON.stringify(users), (err) => {
            if (err) console.log(err);
            res.status(200).json(`{"msg": "خوش آمدید!"}`)
        })

    } else res.status(400).json(`{"msg": "کاربری با این مشخصات یافت نشد!"}`)
})

// login functionality
function loginUser(userInfo) {
    let targetUser = users.find(user => user.username === userInfo.username && user.password === userInfo.password)
    return targetUser === undefined ? false : true
}

// ============= sign up page routes
router.get("/signup", (req, res) => {
    res.render(path.join(__dirname, "../views/signup.ejs"))
})

router.post("/signup", (req, res) => {
    let newUserInfo = req.body
    // console.log(req.body);
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
    newUserInfo.id = generateId()
    console.log("full new User: ", newUserInfo);

    return availableNewUser(newUserInfo) ? true : false
}

function availableNewUser(newUserInfo) {

}

function generateId() {
    return (Math.random() * Math.random() * 1000000000).toFixed()
}

router.get("/profile", (req, res) => {
    // let newUserInfo = JSON.parse(req.body)
    // createUser(newUserInfo)
    res.send("profile page")
})


module.exports = router