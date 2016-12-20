/**
 * Created by 嘉茹 on 2016/11/15.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 900;
    canvas.height = 600;
    var context = canvas.getContext("2d");

    var grd = context.createLinearGradient(450, 0, 450, 600);
    grd.addColorStop(0, '#091133');
    grd.addColorStop(0.5, '#121651');
    grd.addColorStop(1, '#151f6a');

    context.beginPath();
    context.fillStyle = grd;
    context.fillRect(0, 0, 900, 600);
    context.closePath();                             //填充背景颜色

    context.beginPath();
    context.arc(800,80,60,0,2*Math.PI);
    var gradient = context.createLinearGradient(800,20, 780, 180);
    gradient.addColorStop(0, '#757da4')
    gradient.addColorStop(0.4, '#606ea6')
    gradient.addColorStop(1, '#9aa6d1')
    context.fillStyle=gradient;
    context.shadowColor = '#9aa6d1';

    context.shadowBlur= 75;
    context.fill();
    context.closePath();                             //绘制月亮

    drawlittledot(context);                             //绘制小星星
    Drawperson(context);                             //绘制火柴人

    context.beginPath();
    context.fillStyle='black';
    context.fillText("Alcohol",375,390);          //绘制酒

    context.beginPath();
    context.font="30px Arial";
    context.fillStyle='black';
    context.fillText("@Whilewind" ,720,580);
}

function drawlittledot(cxt)
{
    for( var i=0;i<40;i++)
    {
        cxt.beginPath();
        cxt.save();
        cxt.translate(Math.random()*850,Math.random()*200);
        cxt.rotate(Math.random()*Math.PI*2);
        Drawstar(cxt,0, 0, Math.random()*10);
        cxt.restore();
        cxt.fillStyle='#606ea6';
        cxt.shadowColor = 'white';
        cxt.shadowBlur= 100;
        cxt.fill();
        cxt.closePath();
        i=i+1;
    }
}                                                     //多个星星
function Drawstar(cxt, x, y, R) {
    for (var i = 0; i < 5; i++) {
        cxt.fillStyle = "#ffde00";
        cxt.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * R + x, -Math.sin((18 + i * 72) / 180 * Math.PI) * R + y);
        cxt.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * R/2 + x, -Math.sin((54 + i * 72) / 180 * Math.PI) * R/2  + y);
    }
    cxt.closePath();
}                                                     //绘制星星

function Drawperson(cxt)
{
    cxt.beginPath();
    cxt.lineWidth=5;
    cxt.arc(300,340,40,0,Math.PI*2);
    cxt.strokeStyle='black';
    cxt.stroke();
    cxt.closePath();                           //绘制头部

    cxt.beginPath();
    cxt.moveTo(300,380);
    cxt.lineTo(300,500);                       //脖子到椅子
    cxt.lineTo(275,600);
    cxt.lineWidth=5;
    cxt.strokeStyle='black';
    cxt.stroke();
    cxt.beginPath();

    cxt.beginPath();
    cxt.moveTo(300,500);
    cxt.lineTo(325,600);
    cxt.lineWidth=5;
    cxt.strokeStyle='black';
    cxt.stroke();
    cxt.closePath();

    cxt.beginPath();
    cxt.moveTo(300,425);
    cxt.lineTo(325,450);
    cxt.lineTo(375,400)
    cxt.lineWidth=5;
    cxt.strokeStyle='black';
    cxt.stroke();
    cxt.closePath();

    cxt.beginPath();
    cxt.moveTo(300,425);
    cxt.lineTo(325,385);
    cxt.lineTo(375,375)
    cxt.lineWidth=5;
    cxt.strokeStyle='black';
    cxt.stroke();
    cxt.closePath();
}

