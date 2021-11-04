// Client side validation

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorMsg = document.getElementsByClassName("error");
let successIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("failure-icon");

form.addEventListener("submit", (e) =>{
  //Disabling default form submitting behaviour
  e.preventDefault();
  //Running our check function at each submit event
  checkInputs();
})

function checkInputs(){
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  //Username check
  if(usernameValue === ''){
    errorMsg[0].innerHTML = "Username cannot be empty"
    failureIcon[0].style.opacity = "1"
    successIcon[0].style.opacity = "0"
  } else{
    errorMsg[0].innerHTML = ""
    successIcon[0].style.opacity = "1"
    failureIcon[0].style.opacity = "0"
  }

  //Email check
  if(emailValue === ''){
    errorMsg[1].innerHTML = "Email cannot be empty"
    failureIcon[1].style.opacity = "1"
    successIcon[1].style.opacity = "0"
  } else if (!isEmail(emailValue)){
    errorMsg[1].innerHTML = "Email invalid"
    failureIcon[1].style.opacity = "1"
    successIcon[1].style.opacity = "0"
  } else {
    errorMsg[1].innerHTML = ""
    successIcon[1].style.opacity = "1"
    failureIcon[1].style.opacity = "0"
  }

  //Password check
  if(passwordValue === ''){
    errorMsg[2].innerHTML = "Password cannot be empty"
    failureIcon[2].style.opacity = "1"
    successIcon[2].style.opacity = "0"
  } else if (!isPassword(passwordValue)){
    errorMsg[2].innerHTML = "Password must contain 6 characters in total with one uppercase and one lowercase character"
    failureIcon[2].style.opacity = "1"
    successIcon[2].style.opacity = "0"
  } else{
    errorMsg[2].innerHTML = ""
    successIcon[2].style.opacity = "1"
    failureIcon[2].style.opacity = "0"
  }
}

// Regex expression to verify an email address
function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

//Regex:
// /^
// (?=.*[a-z]) - should contain at least one lower case
// (?=.*[A-Z]) - should contain at least one upper case
// [a-zA-Z0-9]{6,} - should contain at least 6 characters
// $/

function isPassword(password){
  return /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(password)
}
