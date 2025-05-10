// Check if logged in
if (!sessionStorage.getItem("isLoggedIn")) {
  alert("Please login first.");
  window.location.href = "index.html"; // Redirect to login if not logged in
}

const form = document.getElementById("noticeForm");
const list = document.getElementById("noticeList");

function loadNotices() {
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  list.innerHTML = "";

  notices.forEach((notice, index) => {
    const div = document.createElement("div");
    div.className = "notice-card";
    div.innerHTML = `
      <strong>${notice.title}</strong><br>
      <small>${notice.date}</small><br>
      <p>${notice.description}</p>
      <button onclick="removeNotice(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;

  const newNotice = { title, date, description };
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  notices.push(newNotice);
  localStorage.setItem("notices", JSON.stringify(notices));

  form.reset();
  loadNotices();
});

function removeNotice(index) {
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  notices.splice(index, 1);
  localStorage.setItem("notices", JSON.stringify(notices));
  loadNotices();
}

function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";  // Redirect to login page
}

window.onload = loadNotices;
