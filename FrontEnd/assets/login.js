//Création du Compte

let user = {
  email: "sophie.bluel@test.tld",
  password: "S0phie"
}

const RequestBody = JSON.stringify(user);

const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: RequestBody
};

  fetch("http://localhost:5678/api/users/login", requestOptions)
  .then(response => {
    if(response.ok) {
      console.log(user);
    } else {
      console.log("connexion echouer");
    }
  })
  .catch(error => {
    console.error(error);
  })

  // Connextion au site 

  
  const form = document.querySelector('.form');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    const requestbody = JSON.stringify({email, password});

    fetch("http://localhost:5678/api/users/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: requestbody
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
      // Rediriger l'utilisateur vers la page de profil, par exemple
      window.location.href = "/admin.html";
    })
    .catch(error => {
      console.error(error);
      // Afficher un message d'erreur à l'utilisateur, par exemple
      let errorIdentification = document.querySelector(".error");
      errorIdentification.style.display = "block";

      form.addEventListener("click", () => {
        errorIdentification.style.display = "none";
      })
    });
  });
  
