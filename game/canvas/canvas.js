// var gameon = false;
var u = false;
var u1 = false;
var k = 5;
var d = 5;
var ko = false;
window.onload = function (){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var x = 475;
    var y = 450;
    var o = 0;
    var b = 480;
    var mo = setInterval(draw, 50);

    function draw (){
        var img = new Image()
        var img1 = new Image()
        img.src = "./images/White-modern-car-on-transparent-background-PNG.png"
        img1.src = "./images/White-modern-car-on-trans534parent-background-PNG.png"
        context.clearRect(0, 0, 1100, 700);

        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle = "black";
        context.fill();
        context.shadowBlur = 0;
        context.shadowColor = "red";        
        context.beginPath();
        context.drawImage(img, o, b, 100, 100);
        context.rect(o, b, 100, 100);
        context.fillStyle = "red";
        context.fill();
        context.shadowBlur = 0;
        context.shadowColor = "black";
    if (u1){
        ko = false;
        o -= k;
        if (ko === false){
        context.drawImage(img1, o, b, 100, 100);
        }
        if (o <= -100){
            o = 1000;
        }
    }
    if (u){
        ko = true;
        o += k;
        if (ko === true){
        context.drawImage(img, o, b, 100, 100);
        }
        if (o >= 1000){
            o = -100;
        }
      }
    }
}
function stop (){
    gameon = false;
    document.getElementById("stop-canvas").style.display = "none"
    document.getElementById("start-canvas").style.display = "block"
}
function start (){
    gameon = true;
    document.getElementById("stop-canvas").style.display = "block"
    document.getElementById("start-canvas").style.display = "none"
}
function domn (){
}
function wealth (){
     u = true;
     u1 = false;
}
function top1 (){
     u1 = true;
     u = false;
}
function Add_speed (){
    k += 1;
}
function delete_speed (){
    k -= 1;
}

dragElement(document.getElementById("game"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("game")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("game").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}