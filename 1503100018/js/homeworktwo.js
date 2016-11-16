/**
 * Created by Administrator on 2016/11/15 0015.
 */
window.onload=function() {
    var canvas = document.getElementById("canvas");//准备工作
    canvas.width = 800;
    canvas.height = 600;
    var context = canvas.getContext("2d");



    context.beginPath();
    grd=context.createLinearGradient(0,0,800,600);
    grd.addColorStop(0,'rgb(200,0,0)');
    grd.addColorStop(0.1,'rgb(180,0,0)');
    grd.addColorStop(0.2,'rgb(160,0,0)');
    grd.addColorStop(0.3,'rgb(140,0,0)');
    grd.addColorStop(0.4,'rgb(120,0,0)');
    grd.addColorStop(0.5,'rgb(100,0,0)');
    grd.addColorStop(0.6,'rgb(80,0,0)');
    grd.addColorStop(0.7,'rgb(60,0,0)');
    grd.addColorStop(0.8,'rgb(40,0,0)');
    grd.addColorStop(0.9,'rgb(20,0,0)');
    grd.addColorStop(1,'rgb(2,0,0)');


    context.fillStyle=grd;

    context.fillRect(0,0,800,600);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(300,300,60,0,2*Math.PI);
    context.fillStyle='white';
    context.fill();

    context.beginPath();
    context.arc(400,300,100,0,2*Math.PI);
    context.fillStyle='white';
    context.fill();

    context.beginPath();
    context.arc(500,300,70,0,2*Math.PI);
    context.fillStyle='white';
    context.fill();

    context.beginPath();
    context.arc(350,300,60,1.25*Math.PI,1.75*Math.PI);

    context.lineWidth=6;
    context.strokeStyle='black';
    context.stroke();

    context.beginPath();
    context.arc(480,300,60,1.25*Math.PI,1.75*Math.PI);

    context.lineWidth=6;
    context.strokeStyle='black';
    context.stroke();

    context.beginPath();
    context.arc(450,260,60,0.25*Math.PI,0.75*Math.PI);

    context.lineWidth=6
    context.strokeStyle='black';
    context.stroke();



    context.font="20px Georgia";
    context.fillText("Delta",500,400);
    context.strokeStyle="black";
    context.stroke();



}


