const list = document.getElementById("noticeList");

// Check if logged in
if (!sessionStorage.getItem("isLoggedIn")) {
  alert("Please login first.");
  window.location.href = "index.html"; // Redirect to login if not logged in
}

function loadNotices() {
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  list.innerHTML = "";

  notices.forEach((notice) => {
    const div = document.createElement("div");
    div.className = "notice-card";
    div.innerHTML = `
      <strong>${notice.title}</strong><br>
      <small>${notice.date}</small><br>
      <p>${notice.description}</p>
    `;
    list.appendChild(div);
  });
}

function logout() {
  sessionStorage.clear();
  window.location.href = "inde.html";  // Redirect to login page
}

window.onload = loadNotices;
