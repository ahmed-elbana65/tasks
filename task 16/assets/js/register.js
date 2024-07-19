//  sign up

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let sign_up = document.getElementById("sign_up");

sign_up.addEventListener("click", (x) => {
  x.preventDefault();
  if ((username.value === "" || email.value === "", password.value === "")) {
    alert("please complete form");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
});
