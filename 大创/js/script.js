window.onload=function() {
	var reference=document.getElementById('reference');
	var system=document.getElementById('system');
	var database=document.getElementById('database');
	var chart=document.getElementById('chart');
	var download=document.getElementById('download');
	var algorithm=document.getElementById('algorithm');
	var top=document.getElementById('top');
	var tli=top.getElementsByTagName('li');
	for(var i=2;i<tli.length;i++){
		tli[i].index=i;
		tli[i].onmouseover=function(){
			for(var j=1;j<tli.length;j++){
				tli[j].className='';
			}
			this.className='action';
		}
		tli[i].onmouseout=function(){
			for(var j=1;j<tli.length;j++){
				tli[j].className='';
			}
			tli[1].className='action';
		}
	}





	// click事件
	reference.onclick=function(){
		window.location.href="Reference/index.html"; 
	}
	system.onclick=function(){
		window.location.href="System/index.html"; 
	}
	database.onclick=function(){
		window.location.href="Database/index.html"; 
	}
	download.onclick=function(){
		window.location.href="Download/index.html"; 
	}
	chart.onclick=function(){
		window.location.href="Chart/index.html"; 
	}
	algorithm.onclick=function(){
		window.location.href="Algorithm/index.html"; 
	}
}