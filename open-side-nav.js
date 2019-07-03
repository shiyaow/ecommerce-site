var menubutton = document.getElementById("menu-hambuger");
var closebutton = document.getElementById("side-nav-close");
var container = document.getElementById("side-nav-container");

menubutton.onclick = function() {
  document.getElementById("side-nav").style.display = "block";
  container.style.display = "block"
}


closebutton.onclick = function() {
  document.getElementById("side-nav").style.display = "none";
  container.style.display = "none"
}

window.onclick = function(event){
  if(event.target == container){
    document.getElementById("side-nav").style.display = "none";
    container.style.display = "none";
  }
}
