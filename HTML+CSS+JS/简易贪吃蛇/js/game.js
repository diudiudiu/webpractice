//自调用函数 --- 游戏
(function(){
	var nums=document.getElementById('num');

	var that=null;
	function Game(map){
		this.food=new Food();
		this.snake=new Snake();
		this.map=map;
		that=this;
	};
	Game.prototype.init=function(times){
		//初始化游戏
		//食物初始化
		this.food.init(this.snake,this.map);
		//小蛇初始化
		this.snake.init(this.map);
		
		
		this.runSnake(this.food,this.map,times)
		this.bindKey();
	};

	//小蛇自动跑
	Game.prototype.runSnake=function(food,map,times){


		var timeID=setInterval(function(){
			this.snake.move(food,map);
			this.snake.init(map);
			//横坐标最大值
			var maxX=map.offsetWidth/this.snake.width;
			var maxY=map.offsetHeight/this.snake.height;
			var headX=this.snake.body[0].x;
			var headY=this.snake.body[0].y;

			if (headX<0||headX>=maxX||headY<0||headY>=maxY) {
				clearInterval(timeID);
				nums.innerHTML=num;
				over();
				
			}
			//蛇撞在身子上
			for (var i = 2; i < this.snake.body.length-1; i++) {
				if (headX==this.snake.body[i].x&&headY==this.snake.body[i].y) {
					clearInterval(timeID);
					nums.innerHTML=num;
					over();
				}
			}
		}.bind(that),times);
		//bind改变this指向	
	};
	//游戏结束
	

	//获取用户按键改变方向
	Game.prototype.bindKey=function(){
		document.addEventListener("keydown",function(e){
			switch(e.keyCode){
				case 37:
					if (this.snake.direction=="right") {
						this.snake.direction="right";
					}else{
						this.snake.direction="left";
					}
					break;
				case 38:
					if (this.snake.direction=="bottom") {
						this.snake.direction="bottom";
						console.log("down is not up");
					}else{
						this.snake.direction="top";
						console.log("up");
					}
					break;
				case 39:
					if (this.snake.direction=="left") {
						this.snake.direction="left";
					}else{
						this.snake.direction="right";
					}
					break;
				case 40:
					if (this.snake.direction=="top") {
						this.snake.direction="top";
						console.log("up is not down");
					}else{
						this.snake.direction="bottom";
						console.log("down");
					}
					break;
			}
		}.bind(that),false)
	}
	window.Game=Game;
}());