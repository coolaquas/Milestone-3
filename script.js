function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(42, 3, 95, 0.82)";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "rgba(156, 0, 47, 1)";
}



function about() {
  var modal = document.getElementById("aboutModal");
  var span = document.getElementsByClassName("close")[0];
  
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  }


function team(){
    var modal = document.getElementById("teamModal");
    var span = document.getElementsByClassName("close")[1];
    
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

function game2048(){
    window.location.assign("./2048/index.html");
}

function puzzleGame(){
  window.location.assign("./Jigsaw-puzzle/Index.html");
}

function ticTac(){
  window.location.assign("./ticTac/tictac.html");
}
