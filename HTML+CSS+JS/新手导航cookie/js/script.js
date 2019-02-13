// JavaScript Document
window.onload=function(){
	var oblack=document.getElementById('black');
	var ostep=document.getElementById('step');	
	var aStep=ostep.getElementsByTagName('li');
	var aA=ostep.getElementsByTagName('a');
	var aClose=ostep.getElementsByTagName('span');

	//读取cookie
	var res=document.cookie.substring(5);
	alert("当前cookies="+"("+res+")");
	
	//判断是否来过
	if(res!="www.open.com.cn"){
		alert("没有登录过");
		oblack.style.display=ostep.style.display=aStep[0].style.display="block";
		
		//下一步按钮
		for( var i=0; i<aStep.length; i++){
			aA[i].index=i;//为每一个按钮增加一个index属性，为后面引用做好准备
			aA[i].onclick=function(){
				this.parentNode.style.display="none";
				//aStep[this.index+1].style.display="block";
				
				if(this.index<aStep.length-1){//如上，如果不加这个判断，到了最后一个会报错
				aStep[this.index+1].style.display="block";
			}
				else if(this.index==aStep.length-1){//如果到了最后一个，结束整个操作
				oblack.style.display="none";
				this.style.display=ostep.style.display="none";
			}
		}
	}
		
		//关闭按钮
		for(var i=0; i<aClose.length;i++){
			aClose[i].onclick=function(){
				oblack.style.display=ostep.style.display="none";
			}
		}
		
	//如果没有来过，添加cookie
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+30);
	document.cookie="name=www.open.com.cn;expires="+oDate;
	}
}
//JQuery
/*$(function(){
	//读取cookie
	var res=document.cookie.substring(5);
	alert("当前cookies="+"("+res+")");
	
	//判断是否来过
	if(res!="www.open.com.cn"){
		alert("没有登录过");
		$('#mask, #searchTip, #searchTip div:eq(0)' ).show();
		$('#searchTip div a').click(function(){
			var currentStep=$(this).parent();
			currentStep.hide();
			currentStep.next().show();
		})

		$('#searchTip div a:last, #searchTip div span').click(function(){
			$('#mask, #searchTip').hide();
		})
		//添加cookie
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+30);
		document.cookie="name=www.open.com.cn;expires="+oDate;
	}


})*/