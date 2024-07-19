let username = document.getElementById("username");
let password = document.getElementById("password");
let sign_in = document.getElementById("sign_in");
let get_user = localStorage.getItem("username");
let get_password = localStorage.getItem("password");
sign_in.addEventListener("click", (x) => {
  x.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("please complete form");
  } else {
    if (
      get_user.trim() === username.value.trim() &&
      get_password.trim() === password.value.trim()
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    } else {
      alert("username or password is wrong")
    }
  }
});
