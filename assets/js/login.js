const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

        iconEye.addEventListener('click', () => {
          //Change password to text
          if(input.type === 'password'){

          //Switch to text  
          input.type = 'text'

          //Icon change
          iconEye.classList.add('eye-outline')
          iconEye.classList.remove('eye-off-outline')
          } else{
            //Change to password
            input.type = 'password'

            //Icon change
            //Icon change
            iconEye.classList.add('eye-outline')
            iconEye.classList.remove('eye-off-outline')
          }
        })
}

showHiddenPass('password', 'login-eye')