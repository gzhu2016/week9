window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 960;
    canvas.height = 640;
    var context = canvas.getContext("2d");
    context.fillStyle = "red";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawStar(context, 160, 160, canvas.height / 15, canvas.height / 6, 0);//¥Û–«–«
    drawStar(context, 320, 64, canvas.height / 45, canvas.height / 20, Math.atan(5 / 3) / Math.PI + 180);//first
    drawStar(context, 384, 128, canvas.height / 45, canvas.height / 20, Math.atan(7 / 1) / Math.PI + 180);//second
    drawStar(context, 384, 224, canvas.height / 45, canvas.height / 20, (360 - Math.atan(7 / 2) / Math.PI));//third
    drawStar(context, 320, 288, canvas.height / 45, canvas.height / 20, (360 - Math.atan(5 / 4) / Math.PI));//fourth
    context.beginPath();
    context.moveTo(160, 160);
    context.lineTo(320, 64);
    context.closePath();
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();
    context.beginPath();
    context.moveTo(160, 160);
    context.lineTo(384, 128);
    context.closePath();
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();
    context.beginPath();
    context.moveTo(160, 160);
    context.lineTo(384, 224);
    context.closePath();
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();
    context.beginPath();
    context.moveTo(160, 160);
    context.lineTo(320, 288);
    context.closePath();
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();
}
function drawStar(cxt, x, y, r, R, angle) {
    cxt.beginPath();
    for (var i = 0; i < 6; i++) {
        cxt.lineTo(Math.cos((18 + i * 72 + angle) / 180 * Math.PI) * R + x,
            -Math.sin((18 + i * 72 + angle) / 180 * Math.PI) * R + y);
        cxt.lineTo(Math.cos((54 + i * 72 + angle) / 180 * Math.PI) * r + x,
            -Math.sin((54 + i * 72 + angle) / 180 * Math.PI) * r + y);
    }
    cxt.closePath();
    cxt.strokeStyle = "yellow";
    cxt.fillStyle = "yellow";
    cxt.lineWidth = 5;
    cxt.fill();
    cxt.stroke();
}