
// Import des variables pour la homepage

import { newFigure, newImage, newFigcaption, newFilter, filterCategory,
    imageContainer, containerFilter, filtersBar } from "../assets/function.js";

// Import des fonctions pour la homepage

import { genererWork, addFilterBar, filterWork, filterChangeColor} from "../assets/function.js";

// Homepage //

fetch("http://localhost:5678/api/works")
    .then(data => data.json())
    .then(jsonListWorks => {
        
        // Ajout des travaux de l'arichitecte

        genererWork(jsonListWorks, imageContainer, newFigure, newFigcaption, newImage);

        // Ajout de la barre de filtre 

        addFilterBar(imageContainer, containerFilter);

        // Filtrer les travaux
        
        fetch("http://localhost:5678/api/categories")
            .then(data => data.json())
            .then(jsonListCategory => {

                jsonListCategory.unshift({"id": 4, "name": "Tous"});
                
            filterWork(jsonListCategory, jsonListWorks, containerFilter, newFilter, filterCategory, imageContainer);

        // Gestion des couleur des filtres 

        filterChangeColor(filtersBar);

        });
        
    });

        
  


   

   