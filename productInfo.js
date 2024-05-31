const selectedCoat = JSON.parse(sessionStorage.getItem("selectedCoat"));
const coatListDiv = document.getElementById("coatList");
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

window.onload = function() {
    loading();
}
function loading (){
    document.querySelector('.loader').style.display = 'block';

    let selectedCoat = JSON.parse(sessionStorage.getItem('selectedCoat'));

    setTimeout(function() {
        document.querySelector('.loader').style.display = 'none';
        displayCoatInfo(selectedCoat);
    }, 1000);
}

function displayCoatInfo(coat) {
    const coatDiv = document.createElement("div");
    coatDiv.innerHTML = `
        <div>
            <div>${coat.title}</div>
            <img src="${coat.image}" alt="picture of coat">
        </div>
        <div>
            <div>Price: $${coat.price}</div>
            <div>Sizes: ${coat.sizes}</div> 
            <div>${coat.description}</div>
            <a href="cart.html">TO CART</a>
        </div>
    `;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", () => {
        cart.push(coat);
        sessionStorage.setItem("cart", JSON.stringify(cart))
        alert('Item added to cart')
    });

    coatDiv.appendChild(addToCartBtn);
    coatListDiv.appendChild(coatDiv);
};
