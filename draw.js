var canvas, canvas1, canvas2, canvas3, canvas4, canvas5, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var y = 2;
    
function init() {
    var dataURL = localStorage.getItem('canvas');
    var img = new Image;
    img.src = dataURL;
    
    canvas = document.getElementById('can');
    canvas1 = document.getElementById('can1');
    canvas2 = document.getElementById('can2');
    canvas3 = document.getElementById('can3');
    canvas4 = document.getElementById('can4');
    canvas5 = document.getElementById('can5');
    
    
    ctx = canvas.getContext("2d");
    ctx1 = canvas1.getContext("2d");
    ctx2 = canvas2.getContext("2d");
    ctx3 = canvas3.getContext("2d");
    ctx4 = canvas4.getContext("2d");
    ctx5 = canvas5.getContext("2d");
    
    
    ctx.drawImage(img,0,0);
//    w = canvas.width;
//    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy(canvas, ctx, 'move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy(canvas, ctx, 'down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy(canvas, ctx, 'up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy(canvas, ctx, 'out', e)
    }, false);
    
    
    canvas1.addEventListener("mousemove", function (e) {
        findxy(canvas1, ctx1, 'move', e)
    }, false);
    canvas1.addEventListener("mousedown", function (e) {
        findxy(canvas1, ctx1, 'down', e)
    }, false);
    canvas1.addEventListener("mouseup", function (e) {
        findxy(canvas1, ctx1, 'up', e)
    }, false);
    canvas1.addEventListener("mouseout", function (e) {
        findxy(canvas1, ctx1, 'out', e)
    }, false);
    
    
     canvas2.addEventListener("mousemove", function (e) {
        findxy(canvas2, ctx2, 'move', e)
    }, false);
    canvas2.addEventListener("mousedown", function (e) {
        findxy(canvas2, ctx2, 'down', e)
    }, false);
    canvas2.addEventListener("mouseup", function (e) {
        findxy(canvas2, ctx2, 'up', e)
    }, false);
    canvas2.addEventListener("mouseout", function (e) {
        findxy(canvas2, ctx2, 'out', e)
    }, false);
    
    
     canvas3.addEventListener("mousemove", function (e) {
        findxy(canvas3, ctx3, 'move', e)
    }, false);
    canvas3.addEventListener("mousedown", function (e) {
        findxy(canvas3, ctx3, 'down', e)
    }, false);
    canvas3.addEventListener("mouseup", function (e) {
        findxy(canvas3, ctx3, 'up', e)
    }, false);
    canvas3.addEventListener("mouseout", function (e) {
        findxy(canvas3, ctx3, 'out', e)
    }, false);
    
    
     canvas4.addEventListener("mousemove", function (e) {
        findxy(canvas4, ctx4, 'move', e)
    }, false);
    canvas4.addEventListener("mousedown", function (e) {
        findxy(canvas4, ctx4, 'down', e)
    }, false);
    canvas4.addEventListener("mouseup", function (e) {
        findxy(canvas4, ctx4, 'up', e)
    }, false);
    canvas4.addEventListener("mouseout", function (e) {
        findxy(canvas4, ctx4, 'out', e)
    }, false);
    
    
     canvas5.addEventListener("mousemove", function (e) {
        findxy(canvas5, ctx5, 'move', e)
    }, false);
    canvas5.addEventListener("mousedown", function (e) {
        findxy(canvas5, ctx5, 'down', e)
    }, false);
    canvas5.addEventListener("mouseup", function (e) {
        findxy(canvas5, ctx5, 'up', e)
    }, false);
    canvas5.addEventListener("mouseout", function (e) {
        findxy(canvas5, ctx5, 'out', e)
    }, false);
}
    
function draw(cont) {
    cont.beginPath();
    cont.moveTo(prevX, prevY);
    cont.lineTo(currX, currY);
    //cont.strokeStyle = "black";
    cont.lineWidth = y;
    cont.stroke();
    cont.closePath();
}

function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
    }
}

function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

function findxy(canv,cont, res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canv.offsetLeft;
        currY = e.clientY - canv.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            cont.beginPath();
            //cont.fillStyle = x;
            cont.fillRect(currX, currY, 2, 2);
            cont.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canv.offsetLeft;
            currY = e.clientY - canv.offsetTop;
            draw(cont);
        }
    }
}

function HandleOnClose(){
    localStorage.setItem('canvas', canvas.toDataURL());
}