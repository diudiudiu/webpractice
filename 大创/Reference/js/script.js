window.onload=function(){
	var more=document.getElementById('more');
	var book=document.getElementById('book');
	var books=book.getElementsByTagName('li');
	var on=document.getElementById('on');
	var left=document.getElementById('left-nav');
	var timer;//定时器
	more.onclick=function(){
		for(var i=7;i<books.length;i++){
			books[i].className='books';
		}
		books[books.length-1].className+=" end";
		ChangeHeight(467,4,20);
		on.className="";
		more.className="hide";
	};
	on.onclick=function(){
		
		ChangeHeight(359,-4,20);
		setTimeout(function(){
			for(var i=8;i<books.length;i++){
				books[i].className='books hide';
				}
			more.className="";
			on.className="hide";
			books[7].className+=" end";
		},300);
			
		
			
			
	};
	function ChangeHeight(height,speed,time){
		var LHeight=left.offsetHeight;
		var h=false;
		timer=setInterval(function(){
			LHeight+=speed;
			if(speed>0){
				if(LHeight>=height){
					LHeight=height;
					h=true;
					clearInterval(timer);
				}
			}else if(speed<0){
				if(LHeight<=height){
					LHeight=height;
					h=true;
					clearInterval(timer);
				}
			}
			left.style.height=LHeight+'px';
		},time);
	}
}