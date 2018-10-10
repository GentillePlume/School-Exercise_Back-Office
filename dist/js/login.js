console.log("login.js launched");

function login() {
  $("#login-button")[0].classList.add("is-loading");

  setTimeout(function() {
    window.location.href = "dashboard.html";
  }, 2000);
}

function logout() {
  window.location.href = "login.html";
}