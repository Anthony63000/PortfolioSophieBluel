
// Import des variables pour la homepage

import { newFigure, newImage, newFigcaption, newFilter, filterCategory,
    imageContainer, containerFilter} from "../assets/function.js";

// Import des fonctions pour la homepage

import { generateWork, addFilterBar, filterWork} from "../assets/function.js";

// Homepage //

fetch("http://localhost:5678/api/works")
    .then(data => data.json())
    .then(jsonListWorks => {
        
        // Ajout des travaux de l'arichitecte

        generateWork(jsonListWorks, imageContainer, newFigure, newFigcaption, newImage);

        // Filtrer les travaux
        
        fetch("http://localhost:5678/api/categories")
            .then(data => data.json())
            .then(jsonListCategory => {

                jsonListCategory.unshift({"id": 4, "name": "Tous"});

            // Ajout de la barre de filtre 

            addFilterBar(imageContainer, containerFilter, newFilter, jsonListCategory);
                
            filterWork(jsonListCategory, jsonListWorks, containerFilter, newFilter, filterCategory, imageContainer);

        });
        
    });

        
  


   

   