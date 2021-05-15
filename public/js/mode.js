const page = window.location.href;
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
	document.body.classList.add("dark");
	if (page.includes("home.html") || page.includes("home-en.html"))
		document.getElementById("a").style.backgroundImage = "url('public/images/house/night.jpg')";
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');

	let theme = "light";
	if (document.body.classList.contains("dark")) {
		theme = "dark";
		if (page.includes("home.html") || page.includes("home-en.html"))
			document.getElementById("a").style.backgroundImage = "url('public/images/house/night.jpg')";
	}
	else if (page.includes("home.html") || page.includes("home-en.html"))
		document.getElementById("a").style.backgroundImage = "url('public/images/house/day.jpg')";

	localStorage.setItem("theme", theme);
});