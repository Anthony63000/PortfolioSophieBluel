
import { genererWork } from "../assets/function.js";
import { addFilterBar } from "../assets/function.js";
import { filterWork } from "../assets/function.js";
import { newFigure, newImage, newFigcaption, newFilter, filterCategory, imageContainer, containerFilter } from "../assets/variables.js";



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
        });            
});

        
  


   

   