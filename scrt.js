const form = document.getElementById("noticeForm");
const list = document.getElementById("noticeList");
const loginForm = document.getElementById("loginForm");
const adminLogin = document.getElementById("adminLogin");
const addNotice = document.getElementById("add-notice");

let isAdmin = false;

// Admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "1234";

// Load notices
function loadNotices() {
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  list.innerHTML = "";

  notices.forEach((notice, index) => {
    const div = document.createElement("div");
    div.className = "notice-card";
    div.innerHTML = `<strong>${notice.title}</strong><br>
                     <small>${notice.date}</small><br>
                     <p>${notice.description}</p>`;
    if (isAdmin) {
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete Notice";
      delBtn.onclick = () => removeNotice(index);
      div.appendChild(delBtn);
    }
    list.appendChild(div);
  });
}

// Login handler
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    isAdmin = true;
    adminLogin.style.display = "none";
    addNotice.style.display = "block";
    loadNotices();
  } else {
    alert("Incorrect login");
  }
});

// Add notice
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

// Remove notice
function removeNotice(index) {
  const notices = JSON.parse(localStorage.getItem("notices")) || [];
  notices.splice(index, 1);
  localStorage.setItem("notices", JSON.stringify(notices));
  loadNotices();
}

window.onload = loadNotices;
