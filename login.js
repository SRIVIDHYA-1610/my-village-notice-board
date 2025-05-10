document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Example hardcoded admin credentials (replace with actual logic)
  const correctUsername = "srividhya";
  const correctPassword = "Srividhya2005@";

  if (username === correctUsername && password === correctPassword) {
    // If login is successful, set sessionStorage
    sessionStorage.setItem("isLoggedIn", "true");

    // Redirect to the admin dashboard
    window.location.href = "dashboard.html"; // Redirect to your admin page
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
