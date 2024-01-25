// if (typeof document !== 'undefined') {
//   document.addEventListener('DOMContentLoaded', function () {
//     const loginForm = document.getElementById('loginForm');

//     if (loginForm) {
//       loginForm.addEventListener('submit', async function (event) {
//         event.preventDefault();

//         const email = loginForm.elements['email'].value;
//         const password = loginForm.elements['password'].value;

//         try {
//           const response = await fetch('/login', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//           });

//           if (response.ok) {
//             // Redirect to home.html on successful login
//             window.location.href = '/home.html';
//           } else {
//             // Handle unsuccessful login
//             const errorData = await response.json();
//             alert(errorData.message); // You can customize this part (e.g., display a popup)
//           }
//         } catch (error) {
//           console.error('Error during login:', error.message);
//         }
//       });
//     }

//     // Redirect link back to register page
//     const registerLink = document.getElementById('registerLink');
//     if (registerLink) {
//       registerLink.addEventListener('click', function () {
//         window.location.href = '/register.html';
//       });
//     }
//   });
// }

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
      loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = loginForm.elements['email'].value;
        const password = loginForm.elements['password'].value;

        try {
          const response = await fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

          if (response.ok) {
            // Redirect to home.html on successful login
            window.location.href = '/home.html';
          } else {
            // Handle unsuccessful login
            const errorData = await response.json();
            alert(errorData.message); 
            console.error('Unsuccessful Login')// You can customize this part (e.g., display a popup)
          }
        } catch (error) {
          console.error('Error during login:', error.message);
        }
      });
    }

    // Redirect link back to register page
    const registerLink = document.getElementById('registerLink');
    if (registerLink) {
      registerLink.addEventListener('click', function () {
        window.location.href = '/register.html';
      });
    }

    // Handle redirect after successful registration
    const registrationResponse = document.getElementById('registrationResponse');
    if (registrationResponse) {
      const response = JSON.parse(registrationResponse.textContent);

      if (response.status && response.redirect) {
        window.location.href = response.redirect;
      }
    }
  });
}
