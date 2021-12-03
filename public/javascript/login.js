async function signupFormHandler(event) {
    event.preventDefault();
  
    // const username = document.querySelector('#username-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        document.location.replace('/login');
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
  }
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

async function loginFormHandler(event) {
    event.preventDefault();
  
    const emailEl = document.querySelector('#email-login');
    const passwordEl = document.querySelector('#password-login');
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email: emailEl.value,
          password: passwordEl.value
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
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);