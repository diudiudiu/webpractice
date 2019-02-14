// JavaScript Document
window.onload=function(){
	var nav=document.getElementById('nav');
	var bt=document.getElementById('bt');
	var st=document.getElementById('st');
	var height=0;
	var maxheight=bt.height;
	var minheight=st.height;
	var step = 5;//动的距离移

	function movedown(){	
		if(height<maxheight){
			height+=step;
			setTimeout(movedown,2);
		}else{
			setTimeout(moveup,3000);
		}
		nav.style.height=height+"px";
	}
	function moveup(){
		
		if(height>minheight){
			height-=step;
			nav.style.height=height+"px";
			setTimeout(moveup,2);
		}else{
			bt.style.display="none";
			st.style.display="block";
		}
	}
		setTimeout(movedown,3000);
	var close=document.getElementById("close");
	close.onclick=function(){
		nav.style.display="none";
	}
}