window.onload=function(){
	Time();moveup();
}
var timer;var time;
function Time(){
	var oDiv=document.getElementById('Time');
	var now=new Date();var y=now.getFullYear();
	var m=now.getMonth();var d=now.getDate();var h=now.getHours();
	var min=now.getMinutes();var s=now.getSeconds();
function zero(i){
	if(i<10){
		i='0'+i;
	}
	return i;
}
	min=zero(min); s=zero(s)
	var msg=y+"年"+m+"月"+d+"日"+h+':'+min+':'+s;
	oDiv.innerHTML=msg;
	timer=setInterval(function(){
		Time();
	},50);
}
function moveup(){
var area = document.getElementById('move');
var iliHeight = 28;//单行滚动的高度
var speed =10;//滚动的速度
var delay=1000;
	 area.scrollTop=0;
	 area.innerHTML+=area.innerHTML;//克隆一份一样的内容
	 function startScroll(){
		 time=setInterval(scrollUp,speed);
		 area.scrollTop++;
		 }
	 function scrollUp(){
		 if(area.scrollTop % iliHeight==0){
			 clearInterval(time);
			 setTimeout(startScroll,delay);
			 
		 }else{
			area.scrollTop++;
			if(area.scrollTop >= area.scrollHeight/2){
				area.scrollTop =0;
			}
		 }
	}
	 setTimeout(startScroll,delay);
}

