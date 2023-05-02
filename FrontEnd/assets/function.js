

// Fonction page Homepage


// Fonction pour générer les travaux de l'architecte

export function genererWork(jsonListWorks, imageContainer, newFigure, newFigcaption, newImage) {

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

// Fonction pour l'ajout des barres de filtres 

export function addFilterBar(imageContainer, containerFilter) {
    containerFilter.classList.add('filters');
    imageContainer.insertAdjacentElement('beforebegin', containerFilter);
}

// Fonction pour filtrer les travaux 

export function filterWork(jsonListCategory, jsonListWorks, containerFilter, newFilter, filterCategory, imageContainer) {
    for (let i = 0; i < jsonListCategory.length; i++) {

        imageContainer = document.querySelector('.gallery');
        newFilter = document.createElement("div");
        newFilter.classList.add("filter");
        containerFilter.appendChild(newFilter);
        newFilter.innerHTML = jsonListCategory[i].name;

        newFilter.addEventListener("click", () => {
            if (jsonListCategory[i].id === 1) {
                filterCategory = jsonListWorks.filter(category => category.categoryId === 1);
            }
            else if (jsonListCategory[i].id === 2) {
                filterCategory = jsonListWorks.filter(category => category.categoryId === 2);
            }
            else if (jsonListCategory[i].id === 3) {
                filterCategory = jsonListWorks.filter(category => category.categoryId === 3);
            }
            else  {
                filterCategory = jsonListWorks.filter(category => category.categoryId);
            }
            document.querySelector(".gallery").innerHTML='';
            genererWork(filterCategory, imageContainer);
        })  

    }   
}


// Fonction page admin 

// Fonction pour générer la modale

export function genererWorkModal(jsonListWorks, newFigureModal, newImageModal, removeTrash, removeTrashContainer, newFigcaptionModal, imageContainerModal) {
    for (let i = 0; i < jsonListWorks.length; i++) {

        newFigureModal = document.createElement("figure");
        newImageModal = document.createElement ("img");
        removeTrashContainer = document.createElement('div');
        removeTrash = document.createElement('i');
        newFigcaptionModal = document.createElement("figcaption");
        newFigureModal.appendChild(removeTrashContainer);
        removeTrashContainer.appendChild(removeTrash);
        imageContainerModal.appendChild(newFigureModal);
        newFigureModal.appendChild(newImageModal);
        newFigureModal.appendChild(newFigcaptionModal);
        removeTrashContainer.classList.add("trash-container");
        removeTrash.classList.add("fa-solid");
        removeTrash.classList.add("fa-trash-can");
        removeTrash.classList.add("fa-xs");
        newImageModal.classList.add('image-modal');
        removeTrash.setAttribute("id", "trash");
        removeTrashContainer.setAttribute("id", i + 1);
        removeTrashContainer.setAttribute("class", "trash-container");
        newFigureModal.setAttribute("class", "figure-modal")
        newFigureModal.setAttribute("data-id", i + 1); 

        newImageModal.src = jsonListWorks[i].imageUrl;
        newFigcaptionModal.innerHTML = "éditer";
        newFigureModal.id = jsonListWorks[i].id
    }
}

// Fonction pour fermer la modal

export function closeModal(modalClose, modal1) {
    modalClose.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            modal1.style.display = "none";
        })
    })
}



   






























// let validation = document.querySelector('.validation');
//         //console.log(localStorage)
//         let trash = modal1.querySelectorAll('#trash');
//         let imageModal = modal1.querySelectorAll('figure');
//         let figure;
//         let figureId;
//         let removedFigureId = [];
//         let removedFigures = {};
//         const headers = new Headers();
//         headers.append("Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MjY4NTUyMSwiZXhwIjoxNjgyNzcxOTIxfQ.1hXGyy_bKR_MiEt_an6zEHbEZuGzCo_pTmBxQCkSGeI');
        
//         //console.log(jsonListWorks);
//         //console.log(trash);
//         //console.log(imageModal);

//         trash.forEach((element) => {
//             element.addEventListener("click", () => {
//               // obtenir la figure parente de l'élément cliqué
//               const figure = element.closest('figure');
//               if (figure) {
//                 // ajouter la correspondance entre l'ID et l'index de la figure supprimée à l'objet
//                 const figureId = figure.id;
//                 const figureIndex = Array.from(figure.parentNode.children).indexOf(figure);
//                 removedFigures[figureId] = figureIndex;
//                 // supprimer la figure de la page
//                 figure.remove();
//               }
//             }) 
//           });
          
//           // écouteur d'événement pour envoyer les requêtes DELETE pour les éléments supprimés
//           validation.addEventListener("click", () => {
//             // boucle à travers les clés (IDs) de l'objet des figures supprimées
//             for (const figureId in removedFigures) {
//               // envoyer une requête DELETE pour la figure correspondante
//               fetch(`http://localhost:5678/api/works/${figureId}`, {
//                 method: 'DELETE',
//                 headers: headers
//               })
//               .then(response => {
//                 if (response.ok) {
//                   console.log(`L'image ${figureId} a bien été supprimée`);
//                 } else {
//                   console.log(`Une erreur est survenue lors de la suppression de l'image ${figureId}`);
//                 }
//               })
//               .catch(error => {
//                 console.log(`Une erreur est survenue lors de la suppression de l'image ${figureId} : ` + error);
//               });
//             }
//           });








// let deleteImage = modal1.querySelectorAll('#trash');
//         let deleteImageModal = modal1.querySelectorAll('.image-modal');
//         let i;
//         let id = jsonListWorks.map(item => item.id);
//         //console.log(id);
//         //console.log(localStorage);
//         const headers = new Headers();
//         headers.append("Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MjY2NDMwOCwiZXhwIjoxNjgyNzUwNzA4fQ.eGSLjLMINFFdaDi_OIG7jC6-qHo35_uHSj9gFjlqg_Y');
//         function deleteWork(jsonListWork,deleteImage, index, element, item, deleteImageModal) {
//             for(i = 0; i < jsonListWorks.length; i++) {
//                     fetch(`http://localhost:5678/api/works/${deleteImageModal[index].id}`, {
//                         method : 'DELETE',
//                         headers: headers
//                     })
//                     .then(response => {
//                         if(response.ok) {
//                             console.log("L'image à bien était supprimé");
//                         }
//                         else {
//                             console.log("Une erreur est survenu.")
//                         }
//                     })
//                     .catch(error => {
//                         console.log("Une erreur est survenue : " + error);
//                     })
//             }
//         }
//             deleteImage.forEach(function (element, index) {
//                 element.addEventListener("click", () => {
//                     deleteWork(jsonListWorks, deleteImage, index, element, id,deleteImageModaldlmf;);
                  
//                 })
//             })





// // function deleteImage(element) {
// //     fetch(`http://localhost:5678/api/works/${element}`, {
// //         method: 'DELETE',
// //         headers: headers
// //     })
// //     .then(response => {
// //         if(response.ok) {
// //             console.log("L'image à bien était supprimé");
// //         }
// //         else {
// //             console.log("Une erreur est survenu.")
// //         }
// //     })
// //     .catch(error => {
// //         console.log('Une erreur est survenue : ' + error);
// //     });
// // }

// // fetch("http://localhost:5678/api/works")
// //     .then(data => data.json())
// //     .then(jsonListWorks => {

// //        genererWorkModal(jsonListWorks);
       
// //         removeTrash.forEach(element => { 
        
            
// //             element.addEventListener("click", () => {
// //                 //deleteImage(element.id);
// //                 let id = this.id;
// //                 console.log(id);
// //             })
// //         });    
// // })








