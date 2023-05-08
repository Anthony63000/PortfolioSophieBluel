// import des variables pour la page login 

import {form, emailUser, passwordUser} from '../assets/function.js';

// Import des fonctions pour la page login

import {login, loginComportement} from '../assets/function.js';

// Login

login(form);

// Comportement du formulaire 

loginComportement(emailUser, passwordUser);

