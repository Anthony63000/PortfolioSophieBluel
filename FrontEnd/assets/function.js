
// Fonction et variables de la homepage // 

// variables pour génerer les tarvaux de la homepage

let newFigure;
let newImage;
let newFigcaption;
let newFilter;
let filterCategory;
const imageContainer = document.querySelector(".gallery");
const containerFilter = document.createElement('div');

export {newFigure, newImage, newFigcaption, newFilter, filterCategory, imageContainer, containerFilter};

// Fonction pour génerer les travaux

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

// Variable pour garder la couleur sur la barre de filtres lorsqu'il est cliqué

let filtersBar = document.querySelectorAll('filter');

export {filtersBar}

// Fonction pour garder la couleur sur la barre de filtres lorsqu'il est cliqué

export function filterChangeColor(filtersBar) {
  filtersBar.forEach((filter) => {
    filter.addEventListener("click", () => {
      filter.style.backgroundColor = "red";
      filter.style.display = "none";
      console.log(filter);
    })
  })
}

// Fonction et variable de la page login //

// variables page login 

const form = document.querySelector('.form');
const user = {
    email: "sophie.bluel@test.tld",
    password: "S0phie"
}

export {form, user}

// Fonction et variables page admin //

export function login(form, user) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = form.email.value;
      const password = form.password.value;

      fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Identifiants incorrects');
        }
      })
      .then(data => {
        localStorage.setItem('authToken', data.token);
        window.location.href = "/admin.html";
      })
      .catch(error => {
        console.error(error);
        let errorIdentification = document.querySelector(".error");
        errorIdentification.style.display = "block";

        form.addEventListener("click", () => {
          errorIdentification.style.display = "none";
        })
      });
    });
  }

// variables modale pour la génération 

const imageContainerModal = document.querySelector(".modal1-image");
let newFigcaptionModal;
let newImageModal;
let newFigureModal;
let removeTrashContainer;
let removeTrash;

export {newFigcaptionModal, newImageModal, newFigureModal, removeTrash, removeTrashContainer, imageContainerModal};

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

// Fermeture de la modal

// variables pour la fermeture de la modal 

const modal1 = document.querySelector('#modal1'); 
const modalClose = document.querySelectorAll('#modal-close');

export {modal1, modalClose};

// Fonction pour fermer la modal

export function closeModal(modalClose, modal1) {
    modalClose.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            modal1.style.display = "none";
        })
    })
}

// Variable pour l'ouverture de la modal lors du click sur Ajouter photo

let buttonAddPicture = document.querySelector('#add-picture');
let windowModal1 = document.querySelector('#modal1-window');
let windowModal2 = document.querySelector('#modal2-window');

export {buttonAddPicture, windowModal1, windowModal2}

// fonction pour l'ouverture de la modal lors du click sur Ajouter photo

export function openModal2(buttonAddPicture, windowModal1, windowModal2) {
    buttonAddPicture.addEventListener("click", () => {
    windowModal1.style.display = "none";
    windowModal2.style.display = "flex";
    })
}

// Variables pour la flèche de retour a la modal précédente 

let returnArrow = document.querySelector('.arrow-return');

export {returnArrow} 

// fonction pour la flèche de retour a la modal précédente 

export function returnModal (returnArrow, windowModal1, windowModal2) {
    returnArrow.addEventListener("click", () => {
      windowModal2.style.display = "none";
      windowModal1.style.display = "flex";
    })
}

// Variables pour l'ouverture de la première modal

const modalOpen = document.querySelector('#open-modal');
export {modalOpen};
   
// fonction pour l'ouverture de la première modal 

export function openModal(modalOpen,windowModal1, windowModal2) {
    modalOpen.addEventListener("click", (e) => {
        e.preventDefault();
        modal1.style.display = "flex";
        windowModal1.style.display = "flex";
        windowModal2.style.display = "none";
    })
  }

  // fonction pour la fermeture de la modale quand on clique en dehors

  export function closeModalClickOut(modal1) {
    window.addEventListener("click", function(event) {
      if(event.target == modal1) {
        modal1.style.display = "none";
      }
    })
  }

  // variables pour créer les catégorie dans la modale
  
  let selectCategory = document.querySelector("#category-picture");
  let selectOption;

  export {selectCategory, selectOption};

  // fonction pour créer les catégorie dans la modale

  export function categoryInput(selectOption, selectCategory, jsonListCategory) {
    for(let i = 0; i < jsonListCategory.length; i++) {
      selectOption = document.createElement("option");
      selectCategory.appendChild(selectOption);
      selectOption.classList.add('option');

      selectOption.innerHTML = jsonListCategory[i].name;
      selectOption.value = jsonListCategory[i].id;
    }
  }

  // Variables pour afficher l'image selectionné avant d'être ajouté au projet

  let iconImage = document.querySelector('#icon-image');
  let inputImage = document.querySelector('#fichier');
  let labelImage = document.querySelector('.label-input');
  let labelInputImage = document.querySelector('.modal2-image-input');
  let uploadImage = document.querySelector('.upload-img');

  export {iconImage, inputImage, labelImage, labelInputImage, uploadImage};

  // fonction pour afficher l'image selectionné avant d'être ajouté au projet

  export function loadingImage(event) {
    let reader = new FileReader();
    reader.onload = function() {
    uploadImage.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }
  
  export function loadImage (iconImage, inputImage, labelImage, labelInputImage, uploadImage) {
      inputImage.addEventListener("change", function(event) {
      inputImage.style.display = "none";
      labelImage.style.display = "none";
      labelInputImage.style.display = "none";
      iconImage.style.display = "none";
      uploadImage.style.display = "flex";
  
      loadingImage(event);
    })  
  }

  // Variable pour l'envoi du formulaire 

  let formTitle = document.querySelector("#title-input");

  export {formTitle}

  // fonction pour l'envoi du formulaire 

  function uploadWork(formTitle, selectCategory, inputImage, token) {
    let formData = new FormData();
    formData.append("image", inputImage.files[0]);
    formData.append("title", formTitle.value);
    formData.append("category", selectCategory.value);
    fetch("http://localhost:5678/api/works", {
      method: 'POST',
      headers: {
        "Authorization": 'Bearer ' + token,
        'accept': 'application/json',
      },
      body: formData
    })
    .then(response => response.json()) 
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  // Variables pour l'ajout définitif de l'image 

  let submitSendWork = document.querySelector("#submit-send-work");
  let uploadWorkadd = document.querySelector('.validation');
  let token = localStorage.getItem('authToken');

  export {submitSendWork, uploadWorkadd, token}

  // Fonction pour l'ajout définif de la page 

  export function confirmWorkAdd(uploadWorkadd) {
    uploadWorkadd.addEventListener('click', () => {
      uploadWork(formTitle, selectCategory, inputImage, token);
    })
  }

  // Fonction pour la fermeture de la modale lors du click de confirmation de la mdoale 2

  export function closeModalToConfirm(submitSendWork) {
    submitSendWork.addEventListener("click", () => {
      modal1.style.display = "none";
    })
  }

  // Variables pour la suppression des travaux 

  let figureModal;
  let figureId;
  let removedFigureId = [];
  let validation = document.querySelector('.validation');
  const headers = new Headers();
  headers.append("Authorization", 'Bearer ' + token);

  export {figureModal, figureId, removedFigureId, validation, headers}

  // fonction pour la suppression des travaux 

 export function deleteWorkModal(trash, figureModal, figureId, removedFigureId, validation, headers) {
    trash.forEach((trashElement) => {
      trashElement.addEventListener("click", () => {
        figureModal = trashElement.closest(".figure-modal");
        figureId = figureModal.id;
        figureModal.remove();
        removedFigureId.push(figureId);
    
          validation.addEventListener("click", () =>{
            for (let i = 0; i < removedFigureId.length; i++) {
              removedFigureId[i] = parseInt(removedFigureId[i]);
            fetch(`http://localhost:5678/api/works/${removedFigureId[i]}`, {
              method : 'DELETE',
              headers: headers
            })
          .then(response => {
              if(response.ok) {
                  console.log("L'image à bien était supprimé");
              }
              else {
                  console.log("Une erreur est survenu.")
              }
            })
          .catch(error => {
                console.log("Une erreur est survenue : " + error);
           })
        }
       })
     })
    })
 }
















