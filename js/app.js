const coatListDiv = document.getElementById("coatList")

let raincoatData = []

fetch("https://api.noroff.dev/api/v1/rainy-days")
    .then((response) => response.json())
    .then((raincoatResultData) => {
        raincoatData = raincoatResultData;
        console.log(raincoatData)
        for (const coat of raincoatData) {
            displayCoat(coat)
        }
});

function displayCoat(coat) {
    const coatDiv = document.createElement("div");
    coatDiv.innerHTML = `
    <img src="${coat.image}" alt="an image of a coat">
    <p>${coat.title}</p>
    `
    coatDiv.addEventListener("click", () => {
        sessionStorage.setItem("selectedCoat", JSON.stringify(coat));
        window.location.href =
            "http://localhost:63342/js-course-assignment-fillip/productInfo.html";
    })
    coatListDiv.appendChild(coatDiv)
}

