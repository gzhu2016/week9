window.onload=function() {
    var canvas = document.getElementById("canvas");
    canvas.width = 900;
    canvas.height = 600;
    var context = canvas.getContext("2d");


    context.fillStyle = "#de2910";
    context.fillRect(0,0,900,600);                             //Ìî³äºìÉ«¹úÆì±³¾°

    function Drawstar(cxt, x, y, R, r) {
        cxt.beginPath();
        for (var i = 0; i < 5; i++) {
            cxt.fillStyle = "#ffde00";
            cxt.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * R + x, -Math.sin((18 + i * 72) / 180 * Math.PI) * R + y);
            cxt.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * r + x, -Math.sin((54 + i * 72) / 180 * Math.PI) * r + y);

            cxt.fill();
        }
        cxt.closePath();
    }

    Drawstar(context, 150, 150, 90, 36);

    context.save();
    context.translate(300,60);
    context.rotate(-Math.PI/2+Math.atan(-9/15));
    Drawstar(context, 0, 0, 30, 12);
    context.restore();

    context.save();
    context.translate(360,120);
    context.rotate(-Math.PI/2+Math.atan(-1/7));
    Drawstar(context, 0, 0, 30, 12);
    context.restore();

    context.save();
    context.translate(360,210);
    context.rotate(-Math.PI/2+Math.atan(6/21));
    Drawstar(context, 0, 0, 30, 12);
    context.restore();

    context.save();
    context.translate(300,270);
    context.rotate(-Math.PI/2+Math.atan(4/5));
    Drawstar(context, 0, 0, 30, 12);
    context.restore();
}