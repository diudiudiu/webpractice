//自调用函数 --- 食物
(function(){
	var elements=[];
	//用来保存食物的;
	//食物对象 宽高颜色横纵坐标，定义构造函数创建对象
	function Food(x,y,width,height,color,radius){
		this.x=x||0;
		this.y=y||0;
		this.width=width||20;
		this.height=height||20;
		this.color=color||"#000";
		this.radius=radius||8;
	};
	//添加原型初始化方法
	Food.prototype.init=function(snake,map){
		//删除小食物
		remove();

		var div=document.createElement("div");
		map.appendChild(div);
		div.style.width=this.width+"px";
		div.style.height=this.height+"px";
		div.style.backgroundColor=this.color;
		div.style.position="absolute";
		div.style.borderRadius=this.radius+"px";
		var temp=true;
		while(temp){
			this.x=parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;
			this.y=parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;
			for (var i = 0; i < snake.body.length; i++) {
				var snakeX=snake.body[i].x;
				var snakeY=snake.body[i].y;
				if (snakeX==this.x&&snakeY==this.y) {
					temp=true;
					break;
				}else{
					temp=false;
				}
			}
		}

		
		

		//横纵坐标随机产生
		div.style.left=this.x+"px";
		div.style.top=this.y+"px";

		elements.push(div);
	};

	//删除食物
	function remove(){
		for (var i = 0; i < elements.length; i++) {
			var ele=elements[i];
			ele.parentNode.removeChild(ele);
			elements.splice(i,1);
		}
	};


	//把Food暴露给window，让外部可以使用
	window.Food=Food;
}());