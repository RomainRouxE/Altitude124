const page = window.location.href;
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark");
  if (page.includes("index.html") || page.includes("en.html"))
    document.getElementById("altitude124").style.backgroundImage =
      "url('public/images/house/bgdark.jpeg')";
}

const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  let theme = "light";
  if (document.body.classList.contains("dark")) {
    theme = "dark";
    if (page.includes("index.html") || page.includes("en.html"))
      document.getElementById("altitude124").style.backgroundImage =
        "url('public/images/house/bgdark.jpeg')";
  } else if (page.includes("index.html") || page.includes("en.html"))
    document.getElementById("altitude124").style.backgroundImage =
      "url('public/images/house/bglight.jpg')";

  localStorage.setItem("theme", theme);
});
