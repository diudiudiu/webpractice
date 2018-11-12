window.onload=function() {
	var reference=document.getElementById('reference');
	var system=document.getElementById('system');
	var database=document.getElementById('database');
	var chart=document.getElementById('chart');
	var download=document.getElementById('download');
	var algorithm=document.getElementById('algorithm');
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