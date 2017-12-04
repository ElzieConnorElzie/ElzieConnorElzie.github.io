function myFunction() {
    var x = document.getElementById("greenLight");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function gameRestart() {
    var a = document.getElementById("firstWins");
    var b = document.getElementById("secondWins");
    var x = document.getElementById("greenLight");
    var c = document.getElementById("firstLane");
    var d = document.getElementById("secondLane");

    c.style.left = 0 + "px";
    c.style.top = 0 + "px";

    d.style.left = 0 + "px";
    d.style.top = 0 + "px";

    a.style.display = "none";
    b.style.display = "none";
    x.style.display = "none";
}

function myMove() {
  var elem = document.getElementById("firstLane");   
  var elem2 = document.getElementById("secondLane"); 
  var pos = 0;
  var pos2 = 0;
  var id = setInterval(frame, 5);
  var y = document.getElementById("firstWins");
  var z = document.getElementById("secondWins");
  function frame() {
    if (pos > 1303) {
      pos = 0;
      y.style.display = "block";
      clearInterval(id);
    } else if (pos2 > 1303) {
      pos = 0;
      z.style.display = "block";
      clearInterval(id);
    } else {
      pos2 = pos2 + getRandomArbitrary(0,5);
      pos = pos + getRandomArbitrary(0, 5); 
      elem.style.left = pos + 'px'; 
      elem2.style.left = pos2 + 'px';
    }
  }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

