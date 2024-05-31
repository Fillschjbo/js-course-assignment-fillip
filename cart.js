const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

if (cart.length > 0) {
    let cartDiv = document.querySelector('.cart');
    cart.forEach((coat, index) => {
        displayCart(coat, cartDiv, index);
    });
} else {
    document.querySelector('.cart').innerHTML = "No Items Added to Cart";
}

function purchaseComplete() {
    let text;
    if (confirm("Press ok to complete purchase") == true) {
        sessionStorage.clear();
        window.location.href = "http://localhost:63342/js-course-assignment-fillip/checkoutComplete.html";
    } else {
        text = "Cancelled";
    }
    document.getElementById("textBox").innerHTML = text;
}

function displayCart(coat, cartDiv, index) {
    let cartItem = document.createElement('div');
    cartItem.innerHTML = `
        <img src="${coat.image}" alt="an image of a coat">
        <p>${coat.title}</p>
        <button class="deleteBtn">Delete</button>
    `;

    const deleteBtn = cartItem.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        deleteCartItem(index);
    });

    cartDiv.appendChild(cartItem);
}

function deleteCartItem(index) {
    cart.splice(index, 1);

    sessionStorage.setItem("cart", JSON.stringify(cart));

    updateCartDisplay();
}

function updateCartDisplay() {
    let cartDiv = document.querySelector('.cart');
    cartDiv.innerHTML = "";

    if (cart.length > 0) {
        cart.forEach((coat, index) => {
            displayCart(coat, cartDiv, index);
        });
    } else {
        document.querySelector('.cart').innerText = "No Items Added to Cart";
    }
}