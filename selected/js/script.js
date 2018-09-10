// JavaScript Document
/**	select js练习
  *
  *
  */
window.onload=function(){
	var box=document.getElementById('divselect'),
	    title=box.getElementsByTagName('cite')[0],
	    menu=box.getElementsByTagName('ul')[0],
	    as=box.getElementsByTagName('a'),
        index=-1;
   
    // 点击三角时
    title.onclick=function(event){
      // 执行脚本
	  event=event || window.event;
	 if(event.stopPropagation){
			   event.stopPropagation(); 
			}else{
			   event.cancelBubble = true;		  
			}
	  menu.style.display='block';
	  document.onkeyup = function(event){
		  event = event||window.event;
		  if(event.keyCode==40){
			  index++;
			  if(index>=as.lenght){
			  	index=0;
			  }
			  for(var i=0; i<as.length;i++){
			  as[i].style.background = '#fff';
			}
			as[index].style.background = '#ccc';
		  }
		  if(event.keyCode==38){
			  index--;
			  if(index<=0){
			  	index=as.lenght-1;
			  }
			  for(var i=0; i<as.length;i++){
			  as[i].style.background = '#fff';
			}
			as[index].style.background = '#ccc';
		  }
		  if(event.keyCode==13){
			for(var i=0; i<as.length;i++){
			  as[i].style.background = '#fff';
			}
			title.innerHTML = as[index].innerHTML;
			menu.style.display = 'none';
		  }
     	}
	 }
   // 滑过滑过、离开、点击每个选项时
      for(var i=0; i<as.length; i++){
	  	 as[i].num = i
		 as[i].onmouseover = function(){
			this.style.background = '#ccc'
			index = as[i].num-1;	 
		 }
		 as[i].onmouseout = function(){
			this.style.background = '#fff'	 
		 }
		 as[i].onclick = function(event){
			event = event||window.event;
			if(event.stopPropagation){
			   event.stopPropagation(); 
			}else{
			   event.cancelBubble = true;		  
			}
			menu.style.display = 'none';
			title.innerHTML = this.innerHTML;	 
		 }  
	  }

   // 点击页面空白处时
      document.onclick = function(){
		 menu.style.display = 'none'; 
	  }

 }