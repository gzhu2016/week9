window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    //使用`font`设置字体。                             
    context.font = "12px serif";
    //使用`fillStyle`设置字体颜色。                                
    context.fillStyle = "#000000";
    //使用`fillText()`方法显示字体。                               
    context.fillText("名字：谢思华", 700, 750);
    context.fillText("学号：1420200012", 690, 780);

    for (var i = 0; i < 32; i++) {
        for (var j = 0; j < 32; j++) {
            context.strokeStyle = 'rgb(0,' + Math.floor(255 - 8 * i) + ',' +
                Math.floor(255 - 8 * j) + ')';
            context.beginPath();
            context.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            context.stroke();
        }
    }
}
