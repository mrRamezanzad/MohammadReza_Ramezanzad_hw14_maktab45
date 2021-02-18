let editInfo

// logout event handler
$("#logout-button").on("click", function (e) {
    editInfo = getInputs()
    console.log(editInfo.id)
    logoutUser(editInfo.id)
    console.log("clicked logout");
    $.ajax({
        type: "POST",
        url: `/logout/${editInfo.id}`,
        data: "data",
        dataType: "json",
        success: function (response) {
            console.log("success", response);
            console.log($(".response-message").text(response.msg))

            setTimeout(() => {
                window.location.replace("/login")
            }, 1500)

        },
        error: (err) => {
            console.log("error", err);
        }
    });
});

// logout functionality
function logoutUser(id) {
    console.log("logged out successfully");
}

// edit event handler
$("#edit-button").on("click", function (e) {
    e.preventDefault()
    editInfo = getInputs()
    editUser()
    console.log("clicked edit");
});


// edit functionality
function editUser() {

    console.log(editInfo);

    if (typeof editInfo === "object") {
        $.ajax({
            type: "Post",
            url: "/edit",
            data: editInfo,
            dataType: "json",
            success: function (response) {
                console.log("success: ", response.msg);
                console.log($(".response-message").text(response.msg))

                setTimeout(() => {
                    window.location.replace("/login")
                }, 1500)
            },
            error: (err) => {
                let msg = err.responseJSON.msg
                console.log("error: ", msg);
                console.log($(".response-message").text(msg))
            }
        })
    }
}

function getInputs() {

    if (validateInputs()) {
        return {
            id: $(`[name="user-id"]`).val().trim(),
            username: $(`[name="username"]`).val().trim(),
            password: $(`[name="password"]`).val().trim(),
            email: $(`[name="email"]`).val().trim(),
            gender: $(`[name='gender']`).val().trim(),
            isLoggedIn: "false"
        }
    }
}

function validateInputs() {

    // borders reset
    $(`[name="username"]`).removeClass('border border-red-500')
    $(`[name="password"]`).removeClass('border border-red-500')
    $(`[name="email"]`).removeClass('border border-red-500')
    $(`[name="gender"]`).removeClass('border border-red-500')

    // labels reset
    $("[for='username']").removeClass('text-red-500')
    $("[for='password']").removeClass('text-red-500')
    $("[for='email']").removeClass('text-red-500')

    // error texts reset
    $(".error-text").removeClass('opacity-100')

    //gender reset
    $(`[name="gender"]`).removeClass('text-red-500')

    if ($(`[name="username"]`).val().trim() === "") {
        $(`[name="username"]`).addClass('border border-red-500')
        $("[name='username'] + .error-text").addClass('opacity-100')
        $("[for='username']").addClass('text-red-500')
    }
    if ($(`[name="password"]`).val().trim() === "") {
        $(`[name="password"]`).addClass('border border-red-500')
        $("[name='password'] + .error-text").addClass('opacity-100')
        $("[for='password']").addClass('text-red-500')
    }
    if ($(`[name="email"]`).val().trim() === "") {
        $(`[name="email"]`).addClass('border border-red-500')
        $("[name='email'] + .error-text").addClass('opacity-100')
        $("[for='email']").addClass('text-red-500')
    }
    if ($(`[name="gender"]`).val().trim() === "") {
        $(`[name="gender"]`).addClass('text-red-500')
        $(`[name="gender"]`).addClass('border border-red-500')
    }



    return $(`[name="username"]`).val().trim() !== "" &&
        $(`[name="password"]`).val().trim() !== "" &&
        $(`[name="email"]`).val().trim() !== "" &&
        $(`[name="gender"]`).val().trim() !== "" ? true : false

}