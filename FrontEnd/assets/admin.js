import {newFigure, newImage, newFigcaption, imageContainer} from "../assets/variables.js";
import {newFigcaptionModal, newImageModal, newFigureModal, removeTrash, removeTrashContainer, imageContainerModal} from "../assets/variables.js"
import { modal1, modalClose, modalOpen } from "../assets/variables.js";
import { genererWork, genererWorkModal, closeModal } from "../assets/function.js";



fetch("http://localhost:5678/api/works")
    .then(data => data.json())
    .then(jsonListWorks => {

        // Générer la modale
        genererWorkModal(jsonListWorks, newFigureModal, newImageModal, removeTrash, removeTrashContainer, newFigcaptionModal, imageContainerModal);

        // Générer les travaux dans la modale
        genererWork(jsonListWorks, imageContainer, newFigure, newFigcaption, newImage);

        // Gestion de la supression des travaux 
        
      let trash = modal1.querySelectorAll("#trash");
      let figureModal;
      let figureId;
      let removedFigureId = [];
      let validation = document.querySelector('.validation');
      const headers = new Headers();
      headers.append("Authorization", 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzEwMzE1OSwiZXhwIjoxNjgzMTg5NTU5fQ.lDxkLElPUd3DCafOhaDX4VR651Lku-xR1jifYdSmpik');

      trash.forEach((trashElement) => {
        trashElement.addEventListener("click", () => {
          figureModal = trashElement.closest(".figure-modal");
          figureId = figureModal.id;
          figureModal.remove();
          removedFigureId.push(figureId);
      
            validation.addEventListener("click", () =>{
              for (let i = 0; i < removedFigureId.length; i++) {
                removedFigureId[i] = parseInt(removedFigureId[i]);
                console.log(removedFigureId);
                console.log(figureModal.id)
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
    })

// gestion fermeture de la boite modale 

closeModal(modalClose, modal1);

// gestion de l'ouverture de la deuxième modale au click sur ajouter photos 

let buttonAddPicture = document.querySelector('#add-picture');
let windowModal1 = document.querySelector('#modal1-window');
let windowModal2 = document.querySelector('#modal2-window');

function openModal2(buttonAddPicture, windowModal1, windowModal2) {
  buttonAddPicture.addEventListener("click", () => {
    windowModal1.style.display = "none";
    windowModal2.style.display = "flex";
  })
}

openModal2(buttonAddPicture, windowModal1, windowModal2);

// gestion de la flèche de retour modal2 à modal1 

let returnArrow = document.querySelector('.arrow-return');

function returnModal (returnArrow, windowModal1, windowModal2) {
  returnArrow.addEventListener("click", () => {
    windowModal2.style.display = "none";
    windowModal1.style.display = "flex";
  })
}

returnModal(returnArrow, windowModal1, windowModal2);

// gestion de la fermeture de la 2ème modal

closeModal(modalClose, modal1);

// gestion de l'ouverture de la modale des travaux 

function openModal(modalOpen,windowModal1, windowModal2) {
  modalOpen.addEventListener("click", (e) => {
      e.preventDefault();
      modal1.style.display = "flex";
      windowModal1.style.display = "flex";
      windowModal2.style.display = "none";
  })
}

openModal(modalOpen,windowModal1, windowModal2);

// deuxième gestion de fermeture de la modale quand l'utilisateur clique en dehors de la modal

function closeModalClickOut(modal1) {
  window.addEventListener("click", function(event) {
    if(event.target == modal1) {
      modal1.style.display = "none";
    }
  })
}

closeModalClickOut(modal1);

// Ajouter les catégories des travaux dans le formulaire

let selectCategory = document.querySelector("#category-picture");
let selectOption;

fetch("http://localhost:5678/api/categories")
    .then(data => data.json())
    .then(jsonListCategory => {
      
      for(let i = 0; i < jsonListCategory.length; i++) {
        selectOption = document.createElement("option");
        selectCategory.appendChild(selectOption);
        selectOption.classList.add('option');

        selectOption.innerHTML = jsonListCategory[i].name;
        selectOption.value = jsonListCategory[i].id;
      }  

// Affichage de l'image slectionné pour être ajouter au projet 

let iconImage = document.querySelector('#icon-image');
let inputImage = document.querySelector('#fichier');
let labelImage = document.querySelector('.label-input');
let labelInputImage = document.querySelector('.modal2-image-input');
let uploadImage = document.querySelector('.upload-img');

function loadingImage(event) {
  let reader = new FileReader();
  reader.onload = function() {
  uploadImage.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

function loadImage (iconImage, inputImage, labelImage, labelInputImage, uploadImage) {
    inputImage.addEventListener("change", function(event) {
    inputImage.style.display = "none";
    labelImage.style.display = "none";
    labelInputImage.style.display = "none";
    iconImage.style.display = "none";
    uploadImage.style.display = "flex";

    loadingImage(event);
  })  
}

loadImage(iconImage, inputImage, labelImage, labelInputImage, uploadImage);

// Envoie du formulaire pour ajouter un projet 

let formTitle = document.querySelector("#title-input");

function uploadWork(formTitle, selectOption, inputImage) {
  let formData = new FormData();
  formData.append("image", inputImage.files[0]);
  formData.append("title", formTitle.value);
  formData.append("category", selectCategory.value);
  fetch("http://localhost:5678/api/works", {
    method: 'POST',
    headers: {
      "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzEwMzE1OSwiZXhwIjoxNjgzMTg5NTU5fQ.lDxkLElPUd3DCafOhaDX4VR651Lku-xR1jifYdSmpik',
      'accept': 'application/json',
    },
    body: formData
  })
  .then(response => response.json()) 
  .then(data => console.log(data))
  .catch(error => console.log(error));
}

let submitSendWork = document.querySelector("#submit-send-work");
let uploadWorkadd = document.querySelector('.validation');

uploadWorkadd.addEventListener('click', () => {
  uploadWork(formTitle, selectOption, inputImage);
})

submitSendWork.addEventListener("click", () => {
  modal1.style.display = "none";
})



});














