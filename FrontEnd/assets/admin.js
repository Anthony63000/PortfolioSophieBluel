
let imageContainer = document.querySelector(".gallery");
let newFigcaption;
let newImage;
let newFigure;

function genererWork(jsonListWorks) {
    for (let i = 0; i < jsonListWorks.length; i++) {

        newFigure = document.createElement("figure");
        newImage = document.createElement ("img");
        newFigcaption = document.createElement("figcaption");
        imageContainer.appendChild(newFigure);
        newFigure.appendChild(newImage);
        newFigure.appendChild(newFigcaption);

        newImage.src = jsonListWorks[i].imageUrl;
        newFigcaption.innerHTML = jsonListWorks[i].title;
    
    }
}

fetch("http://localhost:5678/api/works")
    .then(data => data.json())
    .then(jsonListWorks => {

       genererWork(jsonListWorks);

})

// Modale

let imageContainerModal = document.querySelector(".modal1-image");
let newFigcaptionModal;
let newImageModal;
let newFigureModal;

function genererWorkModal(jsonListWorks) {
    for (let i = 0; i < jsonListWorks.length; i++) {

        newFigureModal = document.createElement("figure");
        newImageModal = document.createElement ("img");
        newFigcaptionModal = document.createElement("figcaption");
        imageContainerModal.appendChild(newFigureModal);
        newFigureModal.appendChild(newImageModal);
        newFigureModal.appendChild(newFigcaptionModal);

        newImageModal.src = jsonListWorks[i].imageUrl;
        newFigcaptionModal.innerHTML = "éditer";
    
    }
}

fetch("http://localhost:5678/api/works")
    .then(data => data.json())
    .then(jsonListWorks => {

       genererWorkModal(jsonListWorks);

})


