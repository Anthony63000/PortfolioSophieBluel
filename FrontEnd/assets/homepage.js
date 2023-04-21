 
// Ajout des travaux de l'architecte

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
    
        // Ajout de la barre de filtre 

        let containerFilter = document.createElement('div');
        containerFilter.classList.add('filters');
        imageContainer.insertAdjacentElement('beforebegin', containerFilter);

        let newFilter; 
        let filtercategory;
        
        fetch("http://localhost:5678/api/categories")
            .then(data => data.json())
            .then(jsonListCategory => {
                
                jsonListCategory.unshift({"id": 4, "name": "Tous"});
                
                for (let i = 0; i < jsonListCategory.length; i++) {

                    newFilter = document.createElement("div");
                    newFilter.classList.add("filter");
                    containerFilter.appendChild(newFilter);
                    newFilter.innerHTML = jsonListCategory[i].name;

                    newFilter.addEventListener("click", () => {
                        if (jsonListCategory[i].id === 1) {
                            filtercategory = jsonListWorks.filter(category => category.categoryId === 1);
                        }
                        else if (jsonListCategory[i].id === 2) {
                            filtercategory = jsonListWorks.filter(category => category.categoryId === 2);
                        }
                        else if (jsonListCategory[i].id === 3) {
                            filtercategory = jsonListWorks.filter(category => category.categoryId === 3);
                        }
                        else  {
                            filtercategory = jsonListWorks.filter(category => category.categoryId);
                        }
                        document.querySelector(".gallery").innerHTML='';
                        genererWork(filtercategory);
                    })  

                }         
        });            
});

        
  


   

   