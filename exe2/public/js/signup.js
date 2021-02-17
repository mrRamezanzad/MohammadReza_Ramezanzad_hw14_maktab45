// show signup form
$(".btn-show-signup").on("click", (e) => {
    console.log("clicked");
    $("#signup-form").removeClass("hidden");
    $("#login-form").addClass("hidden");
    $(".btn-show-signup").addClass("text-red-500");
    $(".btn-show-login").removeClass("text-green-500");
})


// signup event handler
$("#signup-button").on("click", function (e) {
    e.preventDefault()
    // signupUser()
    console.log("clicked signup");

});

// signup functionality