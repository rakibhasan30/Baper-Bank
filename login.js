document.getElementById("button-submit").addEventListener("click", function () {
  var userEmail = "user@example.com";
  var userPassword = "password";
  const user = document.getElementById("email").value;
  const userPass = document.getElementById("password").value;

  if (user === userEmail && userPass === userPassword) {
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter correct email & password");
  }
});
