let nextbtn = document.getElementById("NextImg");
	nextbtn.addEventListener("click",nextImg);
var i = 1;

function nextImg() {
	i++;
	var next = document.getElementById("nImg");
	next.src = "images/" + i + ".jpg";
	if(i == 4) {
		i = 0;
	}
}

  