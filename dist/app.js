document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('first-name').value;
    const name = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const formData = {
      first-name,
      last-name,
      email,
      message
    };
  
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      // Perform any desired action on successful form submission
    })
    .catch(error => {
      console.error(error);
      // Handle any error that occurred during form submission
    });
  });
  