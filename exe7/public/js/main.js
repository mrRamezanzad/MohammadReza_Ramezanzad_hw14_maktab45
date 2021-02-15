// render product cards
function renderCards(products) {
    $("main").html("")
    products.forEach(product => {
        $("main").append(`
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5">
                <div class="card">
                    <img src="${product.image}"
                        class="card-img-top" alt="nike shoe">
                    <div class="card-body pb-2">
                        <h5 class="card-title text-center mb-5">${product.name}</h5>
                        <p class="card-text text-end">رنگ: <span class="card-text-value me-5">${product.color}</span></p>
                        <p class="card-text text-end">سایز: <span class="card-text-value me-5">${product.size}</span></p>
                        <p class="card-text text-end">جنس: <span class="card-text-value me-5">${product.type}</span></p>
                        <div class="mt-5 d-flex justify-content-between">
                            <a href="/product/${product.id}" class="btn btn-buy text-white d-inline">خرید</a>
                            <span class="rtl">
                                <span>تومان</span>
                                <span>${product.price.toLocaleString()}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        
        `);
    });
}
renderCards(db)

// card shadow hover
$(".btn-buy").hover(function () {
    // over
    console.log("hovered btn");
    $(this).addClass("shadow");
}, function () {
    // out
    $(this).removeClass("shadow");
});
$(".card").hover(function () {
    // over
    console.log("hovered card");
    $(this).addClass("shadow");
}, function () {
    // out
    $(this).removeClass("shadow");
});