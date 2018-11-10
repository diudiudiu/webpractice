window.onload=function(){
	var more=document.getElementById('more');
	var book=document.getElementById('book');
	var books=book.getElementsByTagName('li');
	var on=document.getElementById('on');
	more.onclick=function(){
		for(var i=7;i<books.length;i++){
			books[i].className='books';
		}
		books[books.length-1].className+=" end";
		on.className="";
		more.className="hide";
	};
	on.onclick=function(){
		for(var i=8;i<books.length;i++){
			books[i].className='books hide';
		}
		books[7].className+=" end";
		on.className="hide";
		more.className="";
	};
}