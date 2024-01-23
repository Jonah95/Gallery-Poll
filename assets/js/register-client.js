// register.js

// document.getElementById('registerButton').addEventListener('click', async function () {
//   const form = document.getElementById('registrationForm');
//   const formData = new FormData(form);

//   try {
//     const response = await fetch('/register', {
//       method: 'POST',
//       body: formData
//     });

//     if (response.ok) {
//       // Redirect to the login page or perform any other actions upon successful registration
//       window.location.href = '/login.html';
//     } else {
//       console.error('Registration failed:', response.statusText);
//     }
//   } catch (error) {
//     console.error('Error during registration:', error.message);
//   }
// });


// register.js

if (typeof document !== 'undefined') {
  document.getElementById('registerButton').addEventListener('click', async function () {
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
    const password = formData.get('password')
    

    try {
      const response = await fetch('/register', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Redirect to the login page or perform any other actions upon successful registration
        window.location.href = '/login.html';
      } else {
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  });
}