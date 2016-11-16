/**
 * Created by Administrator on 2016/11/15 0015.
 */
window.onload=function() {
    var canvas=document.getElementById("canvas");//准备工作
    canvas.width=800;
    canvas.height=800;
    var context=canvas.getContext("2d");


        context.beginPath();
        context.rect(100,200,600,400);

        context.fillStyle="red";


        context.fill();

    context.beginPath();
    drawstar(context,200,300,60,0);
    drawstar(context,300,240,20,36);
    drawstar(context,350,280,20,18);
    drawstar(context,350,340,20,0);
    drawstar(context,300,380,20,36);

};

function drawstar(cxt,x,y,R,rot){
    cxt.beginPath();
    for(var i = 0;i < 5;i ++){
        cxt.lineTo(Math.cos((18 + i * 72 - rot)/180 *Math.PI)*R + x,-Math.sin((18 + i * 72 - rot)/180*Math.PI)*R + y);
        cxt.lineTo(Math.cos((54 + i * 72 - rot)/180 *Math.PI)*R*1/2 + x,-Math.sin((54 + i * 72 - rot)/180*Math.PI)*1/2*R + y);
    }

    cxt.closePath();

    //状态
    cxt.fillStyle = "yellow";


    //执行
    cxt.fill();

}
