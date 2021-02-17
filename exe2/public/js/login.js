// show login form
$(".btn-show-login").on("click", (e) => {
    console.log("clicked");
    $("#signup-form").addClass("hidden");
    $("#login-form").removeClass("hidden");
    $(".btn-show-login").addClass("text-green-500");
    $(".btn-show-signup").removeClass("text-red-500");
})

// login event handler
$("#login-button").on("click", function (e) {
    e.preventDefault()
    loginUser()

    console.log("clicked login");

});

// login functionality
function loginUser() {
    let loginInfo = {
        username: $("#username-value").val(),
        password: $("#password-value").val()
    }
    console.log(loginInfo);

    $.ajax({
        type: "Post",
        url: "/authorization/login",
        data: loginInfo,
        dataType: "json",
        success: function (response) {
            console.log("success: ",response);

        },
        error: (err) => {
            console.log("something went wrong: ", err);
        }
    });
}
