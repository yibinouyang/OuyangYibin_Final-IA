var Arraycolor = new Array("#00FF66", "#FFFF99", "#99CCFF", "#FFCCFF", "#FFCC99", "#00FFFF", "#FFFF00", "#FFCC00", "#FF00FF");
var n = 0;

function turncolors() {
	n++;
	if(n == (Arraycolor.length - 1)) n = 0;
	document.bgColor = Arraycolor[n];
	setTimeout("turncolors()", 1000);
}
turncolors();
window.onload = function() {
	var popupImg = document.getElementById("popupImg");
	//popupImg.addEventListener('click', showMsg, false);
	popupImg.onclick=function() {
		var popup = document.getElementById("popup");
		 popup.style.display = "block";
	}
	
	var xdiv = document.getElementById("xdiv");
	//popupImg.addEventListener('click', showMsg, false);
	xdiv.onclick=function() {
		var popup = document.getElementById("popup");
		 popup.style.display = "none";
	}
	
}

function showMsg() {

}

function classToggle() {
	const navs = document.querySelectorAll('.Navbar__Items')
	
	navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  document.querySelector('.Navbar__Link-toggle')
	.addEventListener('click', classToggle);