async function signupFormHandler(event) {
    event.preventDefault();
  
    // const username = document.querySelector('#username-signup').value.trim();
    const usernameEl = document.querySelector('#username-signup');
    const emailEl = document.querySelector('#email-signup');
    const passwordEl = document.querySelector('#password-signup');
  
    if (username && email && password) {
      await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username: usernameEl.value,
          email: emailEl.value,
          password: passwordEl.value
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(() => {
        document.location.replace('/')
      })
      .catch(err => console.log(err));
    }
  }
  
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);

async function loginFormHandler(event) {
    event.preventDefault();
  
    const emailEl = document.querySelector('#email-login');
    const passwordEl = document.querySelector('#password-login');
  
    if (email && password) {
      await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email: emailEl.value,
          password: passwordEl.value
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(() => {
        document.location.replace('/')
      })
      .catch(err => console.log(err));
    }
  }
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);