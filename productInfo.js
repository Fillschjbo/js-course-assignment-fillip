const selectedCoat = JSON.parse(sessionStorage.getItem("selectedCoat"));
const coatListDiv = document.getElementById("coatList");

displayCoatInfo(selectedCoat);
function displayCoatInfo(coat) {
    const coatDiv = document.createElement("div");
    coatDiv.innerHTML = `
        <div>
            <div>${coat.title}</div>
            <img src="${coat.image}" alt="picture of coat">
        </div>
        <div>
            <div>Price: $${coat.price}</div>
            <div> sizes: ${coat.sizes}</div>
            <div>${coat.description}</div>
            <a href="cart.html">TO CART</a>
        </div>
    `
    const addToCartBtn = document.createElement("button");
    addToCartBtn.addEventListener("click", () => {
        console.log("added to cart")

        let currentCart = sessionStorage.getItem("cartItems");
        let updateCart = (currentCart += `#${coat.title}`)
        sessionStorage.setItem("cartItems", updateCart)
    });

    addToCartBtn.innerText = "🛒"

    coatListDiv.appendChild(coatDiv);
    coatDiv.appendChild(addToCartBtn);
}