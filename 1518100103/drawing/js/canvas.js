/**
 * Created by pc on 2016/11/13.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 900;
    canvas.height = 750;
    var context = canvas.getContext("2d");
    var grd = context.createLinearGradient(400, 0, 400, 750);
    grd.addColorStop(0.0, "#ffffff");
    grd.addColorStop(0.7, "#74e3f3")
    grd.addColorStop(1.0, "#399df2")
    context.fillStyle = grd;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 5;
    for (var i = 0; i < 3; i++) {
        whale(context, Math.random() * canvas.width  , Math.random() * canvas.height);
    }

    function whale(cxt, x, y) {
        cxt.strokeStyle = "blue";
        cxt.beginPath();
        cxt.moveTo(122 + x, 17 + y -20);
        cxt.quadraticCurveTo(154 + x, 15 + y -20, 153 + x, 63 + y - 20);
        cxt.stroke();
        cxt.beginPath();
        cxt.moveTo(189 + x, 17 + y -20);
        cxt.quadraticCurveTo(154 + x, 15 + y -20, 153 + x, 63 + y - 20);
        cxt.stroke();
        cxt.beginPath();
        cxt.moveTo(106 + x -50, 282 + y -150);
        cxt.quadraticCurveTo(198 + x -50, 347 + y -150, 320 + x -50, 293 + y -150);
        cxt.stroke();//下面第一条
        cxt.beginPath();
        cxt.moveTo(186 + 130 + x -50, 258 + 38 + y -150);
        cxt.quadraticCurveTo(227 + 130 + x -50, 243 + 38 + y -150, 250 + 130 + x -50, 286 + 38 + y -150);
        cxt.stroke();//下面第二条
        cxt.beginPath();
        cxt.moveTo(317 + x -50, 322 + y -150);
        cxt.quadraticCurveTo(266 + x -50, 329 + y -150, 234 + x -50, 278 + y -150);
        cxt.stroke();//左边鳍
        cxt.beginPath();
        cxt.moveTo(317 + x -50, 322 + y -150);
        cxt.quadraticCurveTo(278 + x -50, 297 + y -150, 273 + x -50, 259 + y -150);
        cxt.stroke();//右边鳍
        cxt.beginPath();
        cxt.moveTo(328 + x -50, 292 + y -150);
        cxt.quadraticCurveTo(209 + x -50, 335 + y -150, 101 + x -50, 275 + y -150);
        cxt.stroke();//肚子
        cxt.beginPath();
        cxt.moveTo(49 + 45 + x -50, 265 + y -150);
        cxt.bezierCurveTo(214 + 45 + x -50, 12 + y -150, 274 + 45 + x -50, 397 + y -150, 334 + 45 + x -50, 244 + y -150);
        cxt.stroke();
        cxt.beginPath();
        cxt.arc(130 + x -50, 260 + y -150, 5, 0, Math.PI * 2);
        cxt.closePath();
        cxt.stroke();
    }

    function flower(cxt, x, y, r) {
        cxt.beginPath();
        circle(cxt, x, y, r);
        circle(cxt, x, y + r / 2, r);
        circle(cxt, x + r / 3, y + r / 5, r);
        circle(cxt, x + r / 5, y + r / 3, r);
        circle(cxt, x, y, r);
        circle(cxt, x, y, r);
    }

    function circle(cxt, x, y, r) {
        cxt.beginPath();
        cxt.arc(x, y, r, 0, Math.PI * 2);
        cxt.closePath();
        cxt.lineWidth = 5;
        cxt.strokeStyle = "blue";
        cxt.fillStyle = "blue";
        cxt.fill();
        cxt.stroke();
    }

}
