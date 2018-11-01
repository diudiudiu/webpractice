// JavaScript Document
var eles=["iphone","txt","computer","book","Pro","Mac","Air","Ipad"];
var timer=null;
var flag=0;
window.onload=function(){
    var play=document.getElementById('btn1'),
        stop=document.getElementById('btn2');

    // 开始抽奖
    play.onclick=playFun;
    stop.onclick=stopFun;

   // 键盘事件
   document.onkeyup=function(event){
      event = event || window.event;
      if(event.keyCode==13){
         if(flag==0){
           playFun();
           flag=1;
         }else{
           stopFun();
           flag=0;
         }
      }
   }
}

function playFun(){
	var title=document.getElementById('text');
	var play=document.getElementById('btn1');
	clearInterval(timer);
	timer=setInterval(function(){
	   var random=Math.floor(Math.random()*eles.length);
	   title.innerHTML=eles[random];
	},50);
    play.style.background='#999';
}

function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('btn1');
	play.style.background='#66F';
}