
// show signup form
$(".btn-show-signup").on("click", (e) => {
    console.log("clicked");
    $("#signup-form").removeClass("hidden");
    $("#login-form").addClass("hidden");
    $(".btn-show-signup").addClass("text-red-500");
    $(".btn-show-login").removeClass("text-green-500");
})

// show login form
$(".btn-show-login").on("click", (e) => {
    console.log("clicked");
    $("#signup-form").addClass("hidden");
    $("#login-form").removeClass("hidden");
    $(".btn-show-login").addClass("text-green-500");
    $(".btn-show-signup").removeClass("text-red-500");
})