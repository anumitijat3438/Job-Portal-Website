function registerUser(e) {
  e.preventDefault();
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;
  const role = document.getElementById("reg-role").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some(user => user.username === username);
  if (userExists) {
    alert("Username already exists. Please choose another.");
    return;
  }

  users.push({ username, password, role });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please log in.");
  window.location.href = "login.html";
}

function loginUser(e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert("Login successful!");
    localStorage.setItem("currentUser", JSON.stringify(user));
    if (user.role === "seeker") {
      window.location.href = "dashboard.html";
    } else if (user.role === "employer") {
      window.location.href = "dashboard.html";  
    } else if (user.role === "admin") {
      window.location.href = "admin.html";
    }
  } else {
    alert("Invalid credentials. Please try again.");
  }
}