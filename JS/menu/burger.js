var menubtn = document.getElementById("menu-btn");
menubtn.addEventListener("click", function() {
  var menu = document.getElementById("menu");
  var html = document.getElementsByName("html");
  if (menu.style.display === "none") {
    menu.style.display = "block";
    html.style.backdropFilter = "blur(100%)";
  } else {
    menu.style.display = "none";
  }
});

var crossbtn = document.getElementById("cross-btn");
crossbtn.addEventListener("click", function() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});