const coatListDiv = document.getElementById("coatList");
let raincoatData = [];

// Fetch raincoat data and display it
fetch("https://api.noroff.dev/api/v1/rainy-days")
    .then((response) => response.json())
    .then((raincoatResultData) => {
        raincoatData = raincoatResultData;
        displayCoats(raincoatData);
    });

function displayCoats(coats) {
    coatListDiv.innerHTML = "";
    for (const coat of coats) {
        displayCoat(coat);
    }
}

function displayCoat(coat) {
    const coatDiv = document.createElement("div");
    coatDiv.innerHTML = `
        <img src="${coat.image}" alt="an image of a coat">
        <p>${coat.title}</p>
    `;
    coatDiv.addEventListener("click", () => {
        sessionStorage.setItem("selectedCoat", JSON.stringify(coat));
        window.location.href =
            "productInfo.html";
    });
    coatListDiv.appendChild(coatDiv);
}

let sortingInput = document.getElementById('tags');

sortingInput.addEventListener('change', () => {
    let sortByPrice = sortingInput.value === "price";
    let sortByMale = sortingInput.value === "male";
    let sortByFemale = sortingInput.value === "female";
    let sortBySale = sortingInput.value === "sale";

    if (sortByPrice) {
        raincoatData.sort((a, b) => a.price - b.price);
        displayCoats(raincoatData);
    } else if (sortByMale) {
        let maleCoats = raincoatData.filter(coat => coat.gender === "Male");
        displayCoats(maleCoats);
    }else if (sortByFemale){
        let femaleCoats = raincoatData.filter(coat => coat.gender === "Female");
        displayCoats(femaleCoats);
    }else if (sortBySale){
        let saleCoats = raincoatData.filter(coat => coat.onSale === true);
        displayCoats(saleCoats);
    }else {
        displayCoats(raincoatData)
    }
});
