async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
     const response = await fetch('api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }
  }
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

const loginFormHandler = async function(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login");
  const password = document.querySelector("#password-login");
  fetch("/api/users/login", {
    method: "post",
    body: JSON.stringify({
      email: email.value,
      password: password.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/");
    })
    .catch(err => console.log(err));
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
