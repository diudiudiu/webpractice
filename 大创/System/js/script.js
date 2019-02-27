window.onload=function(){

	var top=document.getElementById('top');
	var tli=top.getElementsByTagName('li');
	var add=document.getElementById('add');
	var btn=document.getElementById('btn');

	for(var i=1;i<tli.length;i++){
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
			tli[2].className='action';
		}
	}

	var	fileField=document.getElementById('fileField');
	fileField.onchange=function(){
		alert("文件类型错误！请重新上传。");
	}

	// var thisimg=document.getElementById('thisimg');
	// var textfield=document.getElementById('textfield');
	// var arrow=document.getElementById('arrow');
	// add.onclick=function(){
	// 	btn.onclick();	
	// }
	// arrow.onclick=function(){
	// 	thisimg.src=textfield.value;
	// }
}
