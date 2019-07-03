var unfold = document.getElementsByClassName("categories");
var toggle = document.getElementsByClassName("topNav");
var curtain = document.getElementById("curtain");

unfold[0].onmouseover = function(){
  document.getElementById("drop-content-women").style.display = "block";
  document.getElementById("myTopNav").style.height = "45vh";
  document.getElementById("myTopNav").style.transition = "height: 1s";
  curtain.style.display = "block";
  curtain.style.opacity = "0.7";
}
toggle[0].onmouseleave = function(){
  document.getElementById("myTopNav").style.height = "8vh";
  document.getElementsByClassName("dropdown-content")[0].style.display = "none";
  curtain.style.opacity = "0";
  curtain.style.display = "none";
}
