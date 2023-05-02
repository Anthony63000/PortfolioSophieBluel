
const form = document.querySelector('.form');

//Création du Compte

const user = {
    email: "sophie.bluel@test.tld",
    password: "S0phie"
  }

    // Connexion au site 

    form.addEventListener('submit', e => {
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
  
