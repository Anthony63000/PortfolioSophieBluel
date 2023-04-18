 
// Ajout des travaux de l'architecte

let imageContainer = document.querySelector(".gallery");
let newFigcaption;
let newImage;
let newFigure;

fetch("http://localhost:5678/api/works")
    .then(data => data.json())
    .then(jsonListWorks => {
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
        console.log(imageContainer);
    });



