const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
//	console.log(document.body.classList)
	if(document.body.classList.contains("dark"))
		document.getElementById("a").style.backgroundImage = "url('public/images/house/night.jpg')";
	else
	document.getElementById("a").style.backgroundImage = "url('public/images/house/day.jpg')";
});