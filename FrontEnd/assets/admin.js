// Import des variables pour la page admin 

import {buttonAddPicture, windowModal1, windowModal2, returnArrow, 
  selectCategory, selectOption, iconImage, inputImage, labelImage, 
  labelInputImage, uploadImage, formTitle, uploadWorkadd, submitSendWork,token, 
  figureModal, figureId, removedFigureId, validation, headers, modal1,
  modalClose, modalOpen,newFigcaptionModal, newImageModal, newFigureModal,
  removeTrash, removeTrashContainer, imageContainerModal, newFigure,
  newImage, newFigcaption, imageContainer, modalImage2, formTitleComportement, 
  movePicture, movePictureContainer, firstFigure} from "../assets/function.js";

// Import des fonctions pour la page admin

import { generateWork, genererWorkModal, closeModal, openModal2,
returnModal, openModal,closeModalClickOut, categoryInput, loadImage,
confirmWorkAdd, closeModalToConfirm, deleteWorkModal, addIconFirstFigure,
confirmChangeColor} from "../assets/function.js";

// Admin //

fetch("http://localhost:5678/api/works")
    .then(data => data.json())
    .then(jsonListWorks => {

      // Générer la modale
      genererWorkModal(jsonListWorks, newFigureModal, newImageModal, removeTrash, removeTrashContainer, newFigcaptionModal, imageContainerModal);

      // Générer l'icon de déplacement dans la première figure 

      addIconFirstFigure(movePicture, movePictureContainer, firstFigure);

      // Générer les travaux dans la modale
      generateWork(jsonListWorks, imageContainer, newFigure, newFigcaption, newImage);

      // Gestion de la supression des travaux 
      
      const trash = document.querySelectorAll("#trash");

      deleteWorkModal(trash, figureModal, figureId, removedFigureId, validation, headers);
})

// gestion fermeture de la boite modale 

closeModal(modalClose, modal1);

// gestion de l'ouverture de la deuxième modale au click sur ajouter photos 

openModal2(buttonAddPicture, windowModal1, windowModal2);

// gestion de la flèche de retour modal2 à modal1 

returnModal(returnArrow, windowModal1, windowModal2);

// gestion de la fermeture de la 2ème modal

closeModal(modalClose, modal1);

// gestion de l'ouverture de la modale des travaux 

openModal(modalOpen,windowModal1, windowModal2);

// deuxième gestion de fermeture de la modale quand l'utilisateur clique en dehors de la modal

closeModalClickOut(modal1);

// Ajouter les catégories des travaux dans le formulaire

fetch("http://localhost:5678/api/categories")
    .then(data => data.json())
    .then(jsonListCategory => {
      
  // Fonction pour ajouter les catégories à l'input 

  categoryInput(selectOption, selectCategory, jsonListCategory);

// Affichage de l'image slectionné pour être ajouter au projet 

loadImage(iconImage, inputImage, labelImage, labelInputImage, uploadImage);

// Envoie du formulaire pour ajouter un projet 

confirmWorkAdd(uploadWorkadd);

// Fermeture de la modale lors du click de la confiramtion de la modale 2 

closeModalToConfirm(submitSendWork, formTitle, inputImage, modalImage2);

formTitleComportement(formTitle, modalImage2, inputImage, submitSendWork);


});














