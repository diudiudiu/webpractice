// JavaScript Document
window.onload=function(){
	//课程数据
	var curriculum=[{
		"name":'数据库',
		"time":[1.1,2.2,3.3],//第几节.周几
		"teacher":"XXX",
		"weeks":[1,2,4],
		"room":'c-107'
	},{
		"name":'HTML+CSS',
		"time":[2.3,3.5,5.1],
		"teacher":"AAA",
		"weeks":[1,2,3,4,5],
		"room":'a-102'
	},{
		"name":'Javascript',
		"time":[2.1,3.5,4.3],
		"teacher":"BBB",
		"weeks":[1,2,3,4,5],
		"room":'d-209'
	},{
		"name":'JSP',
		"time":[1.1,1.4,1.5,1.3],
		"teacher":"CCC",
		"weeks":[1,3,4,5],
		"room":'f-201'
	},{
		"name":'数据挖掘',
		"time":[3.1,3.4,4.1],
		"teacher":"CCC",
		"weeks":[1,2,3,4],
		"room":'f-101'
	}
	];
	var box=document.getElementById('divselect'),
	    title=box.getElementsByTagName('cite')[0],
	    menu=box.getElementsByTagName('ul')[0],
	    as=box.getElementsByTagName('a'),
		num=1;
	var mask=document.getElementById('mask');
		on=document.getElementById('on'),
		nul=document.getElementById('nul'),
		cname=document.getElementById('cname'),
		croom=document.getElementById('croom'),
		cteacher=document.getElementById('cteacher'),
		message=document.getElementById('list'),
		noweek=document.getElementById("noweek");
	var add=document.getElementById('add');
	//详情+幕布
	writeclass(num); 
	var color=['#D6F7FA','#DECBFE','#FEFCC9','#ADE7B3','#FEE4B4'];
		// 点击三角时
		
		
	for(var i=0;i<message.children.length;i++){
		for(var j=0;j<message.children[i].children.length;j++){
			message.children[i].children[j].onclick= function(){
				mask.style.display='block';
				if(this.innerHTML==''){
					var temp=this;
					nul.style.display='block';
					nul.style.background=color[Math.floor(Math.random()*5)];
					add.onclick= function(){
						var cinname=document.getElementById('cinname');
						var cinroom=document.getElementById('cinroom');
						var cinteacher=document.getElementById('cinteacher');
						temp.style.background=color[Math.floor(Math.random()*5)];
						if(cinname.value=="请输入课程名称"||cinroom.value=="请输入上课教室"||cinteacher.value=="请输入教师姓名"){
							temp.innerHTML='';
							temp.style.background='';
						}else{
							temp.innerHTML="<p><span class='classname'>"+cinname.value+' '+"</span>"+"<span class='classteacher'>"+cinroom.value+' '+"</span>"+"<span class='classroom'>"+cinteacher.value+"</span></p>";
						}
						nul.style.display='none';
						mask.style.display='none';
						
					}
				}else{
					on.style.background=color[Math.floor(Math.random()*5)];
					if(this.style.background==''){
						noweek.style.display="block";
					}
					on.style.display='block';
					var span=this.getElementsByTagName('span');
					cname.innerHTML=span[0].innerHTML;
					cteacher.innerHTML=  "老师： "+span[1].innerHTML;
					croom.innerHTML="教室： "+span[2].innerHTML;
				}
			}
		}
	}
	var close0=on.getElementsByTagName('span')[0];
	close0.onclick=function(event){
		event=event || window.event;
		if(event.stopPropagation){
			event.stopPropagation(); 
		}else{
			event.cancelBubble = true;		  
		}
		on.style.display='none';
		mask.style.display='none';
		noweek.style.display="none";
	}
	var close1=nul.getElementsByTagName('span')[0];
	close1.onclick=function(event){
		event=event || window.event;
		if(event.stopPropagation){
			event.stopPropagation(); 
		}else{
			event.cancelBubble = true;		  
		}
		nul.style.display='none';
		mask.style.display='none';
	}
	title.onclick=function(event){
	// 执行脚本
		event=event || window.event;
		if(event.stopPropagation){
			event.stopPropagation(); 
		}else{
			event.cancelBubble = true;		  
		}
		menu.style.display='block';
	}
	// 滑过、离开、点击每个周时
	for(var i=0; i<as.length; i++){
		as[i].num = i+1;
		as[i].onmouseover = function(){
			this.style.background = '#ccc' 
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
		num=this.num;
		writeclass(num); 
		}  
	}
	// 点击页面空白处时
	document.onclick = function(){
		menu.style.display = 'none'; 
	}
	//打印课表
	function writeclass(num){
		var temp;
		var str;
		var week;
		var color=['#D6F7FA','#DECBFE','#FEFCC9','#ADE7B3','#FEE4B4'];
		for(var i=0;i<curriculum.length;i++){
			//循环课表信息
			for(var j=0;j<curriculum[i].time.length;j++){
				//查看课程周几 第几节
				str='cla'+curriculum[i].time[j];
				temp=document.getElementById(str);
				temp.innerHTML="<p><span class='classname'>"+curriculum[i].name+' '+"</span>"+"<span class='classteacher'>"+curriculum[i].teacher+' '+"</span>"+"<span class='classroom'>"+curriculum[i].room+"</span></p>";
				week=document.getElementById('week');
				for(var k=0;k<curriculum[i].weeks.length;k++){
					temp.style.color="#E7E7E7";
					temp.style.background="";
					if(num==curriculum[i].weeks[k]){
						temp.style.color="black";
						temp.style.background=color[Math.floor(Math.random()*5)];
						break;
					}
				}
			}		
		}
	}
}
 