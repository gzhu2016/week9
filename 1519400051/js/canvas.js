window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 900;
    canvas.height = 1600;
    var context = canvas.getContext("2d");

    context.fillStyle = '#f00'
    context.fillRect(0 , 0 , 900 ,600)//红旗底色
    drawStar(context, 90, 150, 150, 0)//大星星
    drawStar(context, 30, 150 + 175 * Math.cos(-30 / 180 * Math.PI), 150 + 175 * Math.sin(-30 / 180 * Math.PI), -48)//小星星
    drawStar(context, 30, 150 + 200 * Math.cos(-10 / 180 * Math.PI), 150 + 200 * Math.sin(-10 / 180 * Math.PI), -28)//小星星
    drawStar(context, 30, 150 + 200 * Math.cos(10 / 180 * Math.PI), 150 + 200 * Math.sin(10 / 180 * Math.PI), -8)//小星星
    drawStar(context, 30, 150 + 175 * Math.cos(30 / 180 * Math.PI), 150 + 175 * Math.sin(30 / 180 * Math.PI), 12)//小星星

    drawMessage(context , "1519400051 Zhang Qi ming" , 450 , 700)//不知道为什么汉字显示不出来

    drawSky(context)//艺术作品
}

function drawStar(cxt, R, x, y, rot) {
    cxt.beginPath()
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(Math.cos((18 + 72 * i + -rot ) / 180 * Math.PI) * R + x, -Math.sin((18 + 72 * i + -rot ) / 180 * Math.PI) * R + y)
        cxt.lineTo(Math.cos((54 + 72 * i + -rot ) / 180 * Math.PI) * R * 2 / 5 + x, -Math.sin((54 + 72 * i + -rot) / 180 * Math.PI) * R * 2 / 5 + y)
    }
    cxt.closePath()
    cxt.fillStyle = "#ff0"
    cxt.strokeStyle = "#ff0"
    cxt.lineWidth = 1
    cxt.fill()
    cxt.stroke()
}

function drawSky(cxt) {
    cxt.clearRect(0, 800, 900, 800)
    cxt.fillStyle = '#000'
    cxt.fillRect(0, 800, 900, 800)
    for (var i = 0; i < 100; i++) {
        drawStar(cxt, Math.random() * 15, Math.random() * 900, 815 + Math.random() * 785, Math.random() * 360)
    }
    cxt.arc(450, 1200, 200, 2 * Math.PI, 0 * Math.PI)
    var grd = cxt.createLinearGradient(250, 1400, 650, 1000)
    grd.addColorStop(0.75, "yellow")
    grd.addColorStop(0.25, "black")
    cxt.fillStyle = grd
    cxt.fill()
}

function drawMessage(cxt , mes , x , y){
    cxt.font = 'bold 52px 宋体';
    cxt.textAlign = 'center'
    cxt.fillStyle = 'black'
    cxt.fillText(mes , x , y);
}