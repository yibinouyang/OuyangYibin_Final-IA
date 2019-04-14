let navbtn = document.getElementById("slide_button");
    navbtn.addEventListener("click",slide_nav);
    function slide_nav(){
        var display = document.getElementById("mainNav").style.display;
        if (display == 'none') {
            document.getElementById("mainNav").style.display = 'block';
        } else {
            document.getElementById("mainNav").style.display = 'none';
        }
        
    }