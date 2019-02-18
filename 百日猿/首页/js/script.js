window.onload=function(){
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
	
	var canvas1 = document.getElementById("canvas1");
    var context1 = canvas1.getContext('2d');

    var canvas2 = document.getElementById("canvas2");
    var context2 = canvas2.getContext('2d');

    var canvas3 = document.getElementById("canvas3");
    var context3 = canvas3.getContext('2d');

    circleProgress(context,90,20);
	circleProgress(context1,90,20);
	circleProgress(context2,90,20);
	circleProgress(context3,90,20);
	
	function circleProgress(context,value,average){
        var grd=context.createLinearGradient(0,0,175,0);
        grd.addColorStop("0","#F25B68");
    	grd.addColorStop(1,"#DA628C");
        var value= Number(value),// 当前百分比,数值
        average = Number(average),// 平均百分比
        color = "#000000",// 进度条、文字样式
        maxpercent = 100,//最大百分比，可设置
        c_width = 175,// canvas，宽度
        c_height =175;// canvas,高度
	
        // 判断设置当前显示颜色
        // if( value== maxpercent ){
        //     color="#29c9ad";
        // }else if( value> average ){
        //     color="#27b5ff";
        // }else{
        //     color="#ff6100";
        // }
        // 清空画布
        context.clearRect(0, 0, c_width, c_height);
        // 画初始圆
        context.beginPath();
        // 将起始点移到canvas中心
        
        context.moveTo(c_width/2, c_height/2);
        // 绘制一个中心点为（c_width/2, c_height/2），半径为c_height/2，起始点0，终止点为Math.PI * 2的 整圆
        context.arc(c_width/2, c_height/2, c_height/2, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = '#FFFFFF'; //填充颜色
        context.fill();
        // 绘制内圆
        context.beginPath();
        context.strokeStyle =grd;
        context.lineCap = 'round';
        context.closePath();
        context.fill();
        context.lineWidth = 10.0;//绘制内圆的线宽度
         /* 多背景色 左对齐*/

       function marginLeft(tag,oth){
            tagmarginleft=tag.style.marginLeft;
            oth.style.marginLeft=tagmarginleft+'px';
       }
        function draw(cur){
            // 画内部空白  
            context.beginPath();  
            context.moveTo(24, 24);  
            context.arc(c_width/2, c_height/2, c_height/2-10, 0, Math.PI * 2, true);  
            context.closePath();  
            context.fillStyle = 'rgba(255,255,255,1)';  // 填充内部颜色
            context.fill();
            // 画内圆
            context.beginPath();
            // 绘制一个中心点为（c_width/2, c_height/2），半径为c_height/2-5不与外圆重叠，
            // 起始点-(Math.PI/2)，终止点为((Math.PI*2)*cur)-Math.PI/2的 整圆cur为每一次绘制的距离
            context.arc(c_width/2, c_height/2, c_height/2-5, -(Math.PI / 2), ((Math.PI * 2) * cur ) - Math.PI / 2, false);
            context.stroke();
            //在中间写字  
            context.font = "bold 18px Arial";  // 字体大小，样式
            context.fillStyle = color;  // 颜色
            context.textAlign = 'center';  // 位置
            context.textBaseline = 'middle';  
            context.moveTo(c_width/2, c_height/2);  // 文字填充位置
            // context.fillText(value+"%", c_width/2, c_height/2-20);
            context.fillText("文本", c_width/2, c_height/2);
        }
        // 调用定时器实现动态效果
        var timer=null,n=0;
        function loadCanvas(nowT){
            timer = setInterval(function(){
                if(n>nowT){
                    clearInterval(timer);
                }else{
                    draw(n);
                    n += 0.01;
                }
            },15);
        }
        loadCanvas(value/100);
        timer=null;
    };
    var close=document.getElementById('close');
    var card1=document.getElementById('card1');
    var mask=document.getElementById('mask');
    close.onclick=function(){
        mask.style.display="none";
    }
    card1.onclick=function(){
        mask.style.display="block";
    }
}