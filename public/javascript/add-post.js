async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('[name="post-title"]').value;
    const location = document.querySelector('[name="post-location"]').value;
    const cost = document.querySelector('[name="post-cost"]').value;
    const description = document.querySelector('[name="post-description"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        location,
        cost,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);