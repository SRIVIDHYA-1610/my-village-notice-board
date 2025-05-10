// For Sign-Up
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const newUser = document.getElementById("newUsername").value;
  const newPass = document.getElementById("newPassword").value;

  localStorage.setItem("adminUser", newUser);
  localStorage.setItem("adminPass", newPass);

  alert("Sign-up successful. You can now login.");
  this.reset();
});

// For Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const savedUser = localStorage.getItem("adminUser");
  const savedPass = localStorage.getItem("adminPass");

  if (user === savedUser && pass === savedPass) {
    alert("Login successful!");
    sessionStorage.setItem("isLoggedIn", "true"); // Store login session
    window.location.href = "userView.html";  // Redirect to user view page
  } else {
    alert("Login failed. Please check credentials.");
  }
});

// Forgot Password (for demonstration)
function forgotPassword() {
  const email = prompt("Enter your email to reset password:");
  alert("Password reset link sent to " + email);
}
