// variables homepages et admin 

let newFigure;
let newImage;
let newFigcaption;
let newFilter;
let filterCategory;
const imageContainer = document.querySelector(".gallery");
const containerFilter = document.createElement('div');

export {newFigure, newImage, newFigcaption, newFilter, filterCategory, imageContainer, containerFilter};

// variables modale pour la génération 

const imageContainerModal = document.querySelector(".modal1-image");
let newFigcaptionModal;
let newImageModal;
let newFigureModal;
let removeTrashContainer;
let removeTrash;

export {newFigcaptionModal, newImageModal, newFigureModal, removeTrash, removeTrashContainer, imageContainerModal};

// variables pour la fermeture de la modal 

const modal1 = document.querySelector('#modal1'); 
const modalClose = document.querySelectorAll('#modal-close');

export {modal1, modalClose};

// variable pour l'ouverture de la modal

const modalOpen = document.querySelector('#open-modal');

export {modalOpen};

