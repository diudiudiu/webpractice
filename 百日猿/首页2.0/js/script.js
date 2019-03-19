window.onload=function(){
    /*  进度条声明 */
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
	
	var canvas1 = document.getElementById("canvas1");
    var context1 = canvas1.getContext('2d');

    var canvas2 = document.getElementById("canvas2");
    var context2 = canvas2.getContext('2d');

    var canvas3 = document.getElementById("canvas3");
    var context3 = canvas3.getContext('2d');

    /*进度条调用*/
    circleProgress(context,90,20);
	circleProgress(context1,90,20);
	circleProgress(context2,90,20);
	circleProgress(context3,90,20);


    var punch=document.getElementById('punch');
    var find=document.getElementById('find');
    var resources=document.getElementById("resources");
    var more=document.getElementById("more");
    /* 左对齐声明 */
    changeAlign(find,punch,"marginLeft");
    changeAlign(find,resources,"marginLeft");
    changeAlign(find,more,"marginLeft");

    // /*  幕布 打开 */
    var close=document.getElementById('close');
    // var card1=document.getElementById('card1');
    var mask=document.getElementById('mask');
    close.onclick=function(){
        mask.style.display="none";
    }
    // card1.onclick=function(){
    //     mask.style.display="block";
    // }

    /* 登陆  邮箱手机声明*/
    var phone=document.getElementById('phone');
    var email=document.getElementById('email');

    var loginChoose=document.getElementById('loginChoose');
    var line1=loginChoose.getElementsByClassName("line1");
    var line2=loginChoose.getElementsByClassName("line2");
    var phoneLogin=document.getElementById('phoneLogin');
    var emailLogin=document.getElementById('emailLogin');
    /* 登陆 邮箱手机切换 */
    phone.onclick=function(){
        this.className="true";
        email.className="";
        phoneLogin.className="phoneLogin";
        emailLogin.className="emailLogin hide";
        line1[0].className="line1 arc";
        line2[0].className="line2";
    }
    email.onclick=function(){
    this.className="true";
        phone.className="";
        phoneLogin.className="phoneLogin hide";
        emailLogin.className="emailLogin";
        line1[0].className="line1";
        line2[0].className="line2 arc";
    }



    /* 打卡的横向滚动*/
    var punchcard=document.getElementById('punchcard');
    var li=punchcard.getElementsByTagName('li');
    punchcard.onmousewheel=function(e){
        MouseWheel(e);
        var width=534*li.length;
        var value=scrollFunc();
        changeMargin(li[0],"marginLeft",value,width-1700);
    }
    /* 更多的横向滚动 */
    var moreAndMore=document.getElementById('moreAndMore');
    var li1=moreAndMore.getElementsByTagName('li');
    moreAndMore.onmousewheel=function(e){
        MouseWheel(e);
        var width=648*li.length;
        var value=scrollFunc();
        changeMargin(li1[0],"marginLeft",value,width-2400);
    }
    /* 资源横向滚动 */
    
    var resourceCard=document.getElementById('resourceCard');
    var li2=resourceCard.getElementsByTagName('li');
    resourceCard.onmousewheel=function(e){
        MouseWheel(e);
        var width=648*li.length;
        var value=scrollFunc();
        changeMargin(li2[0],"marginLeft",value,width-2200);
    }
}





window.onmousewheel=function(){
    var top = document.body.scrollTop||document.documentElement.scrollTop;
    var logoSmall=document.getElementById('logoSmall');
    var functionBar1=document.getElementById('functionBar1');
    var bar=document.getElementById('bar');
    if (top>=100) {
        bar.className="bar hide";
        functionBar1.className="";
        logoSmall.className="";
    }else if(top<100){
        bar.className="bar";
        functionBar1.className="hide";
        logoSmall.className="hide";
    }
}









window.onresize=function(){  

    var punch=document.getElementById('punch');
    var find=document.getElementById('find');
    var resources=document.getElementById("resources");
    var more=document.getElementById("more");
    /* 左对齐声明 */
    changeAlign(find,punch,"marginLeft");
    changeAlign(find,resources,"marginLeft");
    changeAlign(find,more,"marginLeft");

}


    /* 进度 */
    function circleProgress(context,value,average){
        var grd=context.createLinearGradient(0,0,160,0);
        grd.addColorStop("0","#707070");
        grd.addColorStop(1,"#707070");
        var value= Number(value),// 当前百分比,数值
        average = Number(average),// 平均百分比
        color = "#1a1a1a",// 进度条、文字样式
        maxpercent =100,//最大百分比，可设置
        c_width = 160,// canvas，宽度
        c_height =160;// canvas,高度
    
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
        context.lineWidth = 20.0;//绘制内圆的线宽度
         /* 多背景色 左对齐*/
        function draw(cur){
            // 画内部空白  
            context.beginPath();  
            context.moveTo(24, 24);  
            context.arc(c_width/2, c_height/2, c_height/2-20, 0, Math.PI * 2, true);  
            context.closePath();  
            context.fillStyle = 'rgba(255,255,255,1)';  // 填充内部颜色
            context.fill();
            // 画内圆
            context.beginPath();
            // 绘制一个中心点为（c_width/2, c_height/2），半径为c_height/2-5不与外圆重叠，
            // 起始点-(Math.PI/2)，终止点为((Math.PI*2)*cur)-Math.PI/2的 整圆cur为每一次绘制的距离
            context.arc(c_width/2, c_height/2, c_height/2-10, -(Math.PI / 2), ((Math.PI * 2) * cur ) - Math.PI / 2, false);
            context.stroke();
            //在中间写字  
            context.font = "normal 30px Arial";  // 字体大小，样式
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

    /* padding margin 对其 */
    function changeAlign(obj1,obj2,style){             
    　　var leftValue=getObjStyle(obj1,style);
        // var index=leftValue.indexOf('px');
        // leftValue=leftValue.slice(0,index);
        // obj2.style.marginLeft=(parseFloat(marginLeft)+50)+"px";
        obj2.style[style]=leftValue;
　　}

    
    function getObjStyle(obj, style){
        if(obj.currentStyle)
            return obj.currentStyle[style];
        else if(window.getComputedStyle)
            return window.getComputedStyle(obj, null)[style];
        else
            return null;
    }
    
            
    function scrollFunc(e) {
        // e是FF的事件。window.event是chrome/ie/opera的事件
        var ee = e || window.event;
        var value;
         console.log(ee); //可以看看ee.wheelDelta和e.detail在浏览器中的值；
        if(ee.wheelDelta) { //IE/Opera/Chrome   
            value = ee.wheelDelta;
        } else if(ee.detail) { //Firefox    
            value = ee.detail;
        }
        return value;
    }
    //用firefox变量表示火狐代理
    var firefox = navigator.userAgent.indexOf('Firefox') != -1;
    function MouseWheel(e){//阻止事件冒泡和默认行为的完整兼容性代码
        e = e||window.event;
        if (e.stopPropagation) {//这是取消冒泡
            e.stopPropagation();
        } else{
            e.cancelBubble = true;
        };
        if (e.preventDefault) {//这是取消默认行为，要弄清楚取消默认行为和冒泡不是一回事
            e.preventDefault();
        } else{
            e.returnValue = false;
        };
    }
    function changeMargin(obj1,style,value,width){             
    　　var leftValue=getObjStyle(obj1,style);
        var index=leftValue.indexOf('px');
        leftValue=leftValue.slice(0,index);
        if (parseFloat(leftValue)+value>0) {
            obj1.style.marginLeft=0;
        }else if(parseFloat(leftValue)+value<-width){
            obj1.style.marginLeft=-width+"px";
        }else{
            obj1.style.marginLeft=(parseFloat(leftValue)+value)+"px";
        }
    }
    // var con = document.getElementById('content');//要在content内部滚动，而页面不受影响，所以这里获取要滚动的对象
    // //如果是ff就绑定DOMMouseScroll事件，其他浏览器就用onmousewheel事件触发
    // firefox ? con.addEventListener('DOMMouseScroll',MouseWheel,false) : (con.onmousewheel = MouseWheel);
    