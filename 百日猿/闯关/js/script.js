window.onload=function(){
	
	


   //  var card1=document.getElementById('card1');
   //  var mask=document.getElementById('mask');
   //  var details=document.getElementById('details');

   //  // 禁止事件冒泡
   // details.onclick=function(e) { 
   //      //如果提供了事件对象，则这是一个非IE浏览器 
   //      if ( e && e.stopPropagation ) {
   //          //因此它支持W3C的stopPropagation()方法 
   //          e.stopPropagation(); 
   //      }
            
   //      else{
   //          //否则，我们需要使用IE的方式来取消事件冒泡 
   //          window.event.cancelBubble = true; 
   //      }
   //  }

   //  mask.onclick=function(e) { 
   //      //如果提供了事件对象，则这是一个非IE浏览器 
   //      if ( e && e.stopPropagation ) {
   //          //因此它支持W3C的stopPropagation()方法 
   //          e.stopPropagation(); 
   //      }
            
   //      else{
   //          //否则，我们需要使用IE的方式来取消事件冒泡 
   //          window.event.cancelBubble = true; 
   //      }
   //      mask.style.display="none";
   //  }
   //  card1.onclick=function(){
   //      mask.style.display="block";
   //  }


    

    function changeAlign(obj1,style,value,width){             
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
         // console.log(ee); //可以看看ee.wheelDelta和e.detail在浏览器中的值；
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
    // var con = document.getElementById('content');//要在content内部滚动，而页面不受影响，所以这里获取要滚动的对象
    // //如果是ff就绑定DOMMouseScroll事件，其他浏览器就用onmousewheel事件触发
    // firefox ? con.addEventListener('DOMMouseScroll',MouseWheel,false) : (con.onmousewheel = MouseWheel);
}