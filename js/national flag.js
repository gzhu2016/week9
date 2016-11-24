window.onload = function () {
    // canvas 初始化
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");
    context.fillStyle = "#FFF";
    context.fillRect(0, 0, 800, 800);

    drawflag(context);
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
 *绘制五星红旗
 * @param{[context]}  cxt[画笔-上下文环境]
 * @param{[]}
 *
 */
function drawflag(cxt){
    cxt.fillStyle="rgb(222,41,16)";
    cxt.fillRect(0,0,600,400);
    cxt.fillStyle="rgb(255,255,0)";
    drawStar(cxt,90,100,60,25,108);
    drawStar(cxt,200,35,20,7.5,60);
    drawStar(cxt,250,80,20,7.5,80);
    drawStar(cxt,250,150,20,7.5,108);
    drawStar(cxt,200,195,20,7.5,60);
    cxt.fill();

}

drawflag(context);