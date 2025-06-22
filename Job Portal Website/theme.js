 document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const icon = document.getElementById("theme-icon");
  const isDark = document.body.classList.contains("dark-mode");
  icon.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-icon").textContent = "☀️";
  }
});
