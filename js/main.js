        function slide_nav(){
            var display = document.getElementById("mainNav").style.display;
            if (display == 'none') {
                document.getElementById("mainNav").style.display = 'block';
            } else {
                document.getElementById("mainNav").style.display = 'none';
            }
            
        }

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