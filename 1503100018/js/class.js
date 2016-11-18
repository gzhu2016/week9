/**
 * Created by Administrator on 2016/11/8 0008.
 */
window.onload=function() {
    var canvas=document.getElementById("canvas");//准备工作
    canvas.width=375;
    canvas.height=667;
    var context=canvas.getContext("2d");
    context.fillStyle="#ebebeb";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.fillRect(0,0,800,800);
    drawMyChat(context,250,200,100,40,5);
    drawHisChat(context,50,100,100,40,5);
    drawBackGround(context);

    function generate(){
        var  hisName=document.getElementById('hisName');
        console.log(hisName,value);
        context.font='Lighter 18px STHeitiSC-Light'
        context.textAlign='center';
        context.textBaseline='top';
        context.fillStyle='#ffffff';
        context.fillText(hisName,value,187,32);
    }
}

function drawMyChat(cxt,x,y,w,h,r){
    cxt.beginPath();
    cxt.moveTo(x+r,y);//A
    cxt.lineTo(x+w-r,y);//B
    cxt.arc(x+w-r,y+r,r,1.5*Math.PI,2*Math.PI);
    cxt.lineTo(x+w,y+r+12);
    cxt.lineTo(x+w+6,y+r+12+3);
    cxt.lineTo(x+w,y+r+12+6);
    cxt.lineTo(x+w,y+h-r);//F
    cxt.arc(x+w-r,y+h-r,r,0,0.5*Math.PI);
    cxt.lineTo(x+r,y+h);//D
    cxt.arc(x+r,y+h-r,r,0.5*Math.PI,Math.PI);
    cxt.lineTo(x,y+r);//G
    cxt.arc(x+r,y+r,r,Math.PI, 1.5*Math.PI);
    cxt.lineWidth=1;
    cxt.strokeStyle='#9edb5d';
    cxt.stroke();
    cxt.fillStyle='#a4ea5c';
    cxt.fill();
}

function drawHisChat(cxt,x,y,w,h,r){
    cxt.beginPath();
    cxt.moveTo(x+r,y);//A
    cxt.lineTo(x+w-r,y);//B
    cxt.arc(x+w-r,y+r,r,1.5*Math.PI,2*Math.PI);
    cxt.lineTo(x+w,y+h-r);//F
    cxt.arc(x+w-r,y+h-r,r,0,0.5*Math.PI);
    cxt.lineTo(x+r,y+h);//D
    cxt.arc(x+r,y+h-r,r,0.5*Math.PI,Math.PI);
    cxt.lineTo(x,y+r+12+6);
    cxt.lineTo(x-6,y+r+12+3);
    cxt.lineTo(x,y+r+12);
    cxt.lineTo(x,y+r);//G
    cxt.arc(x+r,y+r,r,Math.PI, 1.5*Math.PI);
    cxt.lineWidth=1;
    cxt.strokeStyle='#fafafa';
    cxt.stroke();
    cxt.fillStyle='#ffffff';
    cxt.fill();
}


function drawBackGround(cxt){
    cxt.beginPath();
    var grd=cxt.createLinearGradient(0,0,0,63);
    grd.addColorStop(0.0,'#221f25');
    grd.addColorStop(1.0,'#454545');
    cxt.fillStyle=grd;
    cxt.fillRect(0,0,375,63);

    var bar=new Image();
    bar.src=
    bar.onload=function(){
        var pattern=cxt.createPattern(bar,5,0);
    }

    var inputbar=new Image()
    inputbar.src=
    inputbar.onload=function(){
        cxt.drawImage(inputbar,0,619);
    }
}