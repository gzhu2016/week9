window.onload = function () {
    // canvas 初始化
    var canvas = document.getElementById("canvas");
    canvas.width = 600;
    canvas.height = 400;
    var context = canvas.getContext("2d");

    //红背景
    context.fillStyle='#f00';
    context.fillRect(0,0,canvas.width,canvas.height);

    //大星星
    var xbig=0.25*canvas.height;
    var ybig=0.25*canvas.height;
    var rbig=0.15*canvas.height;
    drawstar(context,xbig,ybig,rbig,0);

    //小星星
    var rsmall=0.05*canvas.height;
    var x1 = [0.50, 0.60, 0.60, 0.50];
    var y1 = [0.10, 0.20, 0.35, 0.45];
    for (var i = 0; i < 4; i++) {
        var x = x1[i] * canvas.height;
        var y = y1[i] * canvas.height;
        var  rot = -(Math.atan((ybig-y)/(x-xbig))*180/Math.PI+90);
        drawstar(context,x, y,rsmall,rot);
    }
};

function drawstar(cxt, x, y, R, rot) {
    cxt.beginPath();
    var r=R*Math.sin(18*Math.PI/180)/Math.sin(126*Math.PI/180);
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(
            Math.cos((18 + i * 72 - rot) / 180 * Math.PI) * R + x,
            -Math.sin((18 + i * 72 - rot) / 180 * Math.PI) * R + y
        );
        cxt.lineTo(
            Math.cos((54 + i * 72 - rot) / 180 * Math.PI) * r + x,
            -Math.sin((54 + i * 72 - rot) / 180 * Math.PI) * r + y
        );
    }
    cxt.closePath();

    cxt.fillStyle = "yellow";
    cxt.fill();
}

