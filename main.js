let button = document.getElementById("theme-button");
let theme = localStorage.getItem("theme");

if (theme) {
  document.body.classList.add(theme);
}

button.onclick = function () {
  if (theme === "dark") {
    document.body.classList.remove("dark");
    theme = "light";
  } else {
    document.body.classList.add("dark");
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
};