//modal in top navigation menu
var modal = document.getElementById('login-modal');
var btn = document.getElementById("modalBtn");
var span=document.getElementsByClassName("close-btn")[0];

//when click on the button, open modal
btn.onclick = function() {
    modal.style.display ="block";
}

span.onclick = function() {
    modal.style.display= "none";
}
//click on the area aroung modal to close the modal
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
        console.log("fail to close the modal");
    }
}

//modal in side navigation menuIcon
var open = document.getElementById("side-login");
open.onclick = function() {
    modal.style.display = "block";
}
