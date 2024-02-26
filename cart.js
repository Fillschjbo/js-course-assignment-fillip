const cart = sessionStorage.getItem("cartItems");

if (cart) {
    let cartItems = cart.split("#");
    cartItems.shift();

    const cartList = document.getElementById("cartList")

    cartItems.forEach(item => {
        let cartListItem = document.createElement("li");
        cartListItem.innerHTML = `
        <div>${item}</div>
        `
        cartList.appendChild(cartListItem);
    })
} else{
    document.getElementById("cartList").innerHTML = "No Items Added to Cart"
}
function purchaseComplete() {
    let text;
    if (confirm("Press ok to complete purchase") == true){
        sessionStorage.clear();
        window.location.href= "http://localhost:63342/js-course-assignment-fillip/checkoutComplete.html"
    } else {
        text= "Cancelled";
    }
    document.getElementById("textBox").innerHTML = text;
}

//getelementid, call function, function(create element)