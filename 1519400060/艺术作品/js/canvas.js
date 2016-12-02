window.onload = function () {
    // canvas 初始化
    var canvas = document.getElementById("canvas");
    canvas.width = 900;
    canvas.height = 900;
    var context = canvas.getContext("2d");

    drawSky(context);

    drawMoon(context, 800, 50, 800, 150, 890, 100);

    context.textAlign="center";
    context.strokeStyle="while";
    context.fillText("朱国润",0.9*canvas.width,0.9*canvas.height);
    context.fillText("1519400060",0.9*canvas.width,0.9*canvas.height+15);
    context.stroke();

};

/**
 * 绘制星星
 * @param  {[context]} cxt [画笔-上下文环境]
 * @param  {[double]} x   [五角星中点x坐标]
 * @param  {[double]} y   [五角星中点y坐标]
 * @param  {[double]} r   [五角星内圆半径r]
 * @param  {[double]} R   [五角星外圆半径R]
 * @param  {[double]} rot [五角星旋转角度]
 * @return {[null]}
 */
 function drawStar(cxt, x, y, r, R, rot) {
    cxt.beginPath();
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

    cxt.fillStyle = "#fb3";
    cxt.strokeStyle = "#fb5";
    cxt.lineWidth = 3;
    cxt.lineJoin = "round";

    cxt.fill();
    cxt.stroke();
}

/**
 * 绘制星空
 * @param  {[context]} cxt [画笔-上下文环境]
 * @return {[null]}
 */
 function drawSky(cxt) {
    var sky = cxt.createLinearGradient(0, 0, 0, canvas.height);
    sky.addColorStop(0.0, "#000");
    sky.addColorStop(1.0, "#035");
    cxt.fillStyle = sky;
    cxt.fillRect(0, 0, canvas.width, canvas.height);

     for(var i=0;i<=600;i+=300)
     {
         for (var j = 0; j < 20*(900-i)/300; j++) {
             var R = Math.random() * 5 + 5*(i/300+1);
             var x = Math.random() * canvas.width;
             var y = Math.random() * canvas.height*0.5+i;
             var rot = Math.random() * 360;
             drawStar(cxt, x, y, R/2.0, R, rot);
         }
     }
}

/**
 * 计算两点间距离的函数
 * @param  {[double]} x1 [point1 x]
 * @param  {[double]} y1 [point1 y]
 * @param  {[double]} x2 [point2 x]
 * @param  {[double]} y2 [point2 y]
 * @return {[null]}
 */
function dis(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

/**
 * 绘制月亮
 * @param  {[context]} cxt [画笔-上下文环境]
 * @param  {[double]} x1  [月亮上端点 x]
 * @param  {[double]} y1  [月亮上端点 y]
 * @param  {[double]} x2  [月亮下端点 x]
 * @param  {[double]} y2  [月亮下端点 y]
 * @param  {[double]} x3  [月亮弧度控制点 x]
 * @param  {[double]} y3  [月亮弧度控制点 y]
 * @return {[null]}
 */

function drawMoon(cxt, x1, y1, x2, y2 ,x3, y3) {
    cxt.beginPath();
    cxt.arc((x2 + x1)/2.0, (y2 + y1)/2.0, (y2 - y1)/2.0, Math.PI * 0.5, Math.PI * 1.5, true);
    cxt.arcTo(x3, y3, x2, y2, (y2 - y1)/2 / (x3-x1) * dis(x1, y1, x3, y3));
    cxt.closePath();

    cxt.lineWidth = 3;
    cxt.strokeStyle = "#000";
    cxt.fillStyle = "#FDFFEF";
    cxt.stroke();
    cxt.fill();
}

