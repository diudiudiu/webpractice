window.onload=function(){;
	waterfall('box','out');
	var dataInt={'data':[{'src':'yundong(56).jpg'},{'src':'yundong(57).jpg'},{'src':'yundong(58).jpg'},{'src':'yundong(59).jpg'},{'src':'yundong(60).jpg'},{'src':'yundong(61).jpg'},{'src':'yundong(62).jpg'},{'src':'yundong(63).jpg'},{'src':'yundong(64).jpg'},{'src':'yundong(65).jpg'}]};
	window.onscroll=function(){
        if(checkscrollside()){
            var oParent = document.getElementById('box');// 父级对象
            for(var i=0;i<dataInt.data.length;i++){
                var oPin=document.createElement('div'); //添加 元素节点
                oPin.className='out';                   //添加 类名 name属性
                oParent.appendChild(oPin);              //添加 子节点
                var oBox=document.createElement('div');
                oBox.className='border';
                oPin.appendChild(oBox);
                var oImg=document.createElement('img');
                oImg.src='./images/'+dataInt.data[i].src;
                oBox.appendChild(oImg);
            }
            waterfall('box','out');
        };
    }

}
function waterfall(parent,classname){
	var box=document.getElementById(parent);
	var out=getClassName(box,classname);
	var column=Math.floor(document.documentElement.clientWidth/out[0].offsetWidth);
	box.style.width=out[0].offsetWidth*column+'px';
	var arr=[];
	for(var i=0;i<out.length;i++){
		var temp=out[i].offsetHeight;
		if(i<column){
			arr[i]=temp;
		}else{
			var minH=Math.min.apply(null,arr);
			var index=getminHIndex(arr,minH);
			out[i].style.position='absolute';//设置绝对位移
            out[i].style.top=minH+'px';
            out[i].style.left=out[index].offsetLeft+'px';
			arr[index]+=out[i].offsetHeight;
		}
	}
}
function getminHIndex(arr,minH){
    for(var i in arr){
        if(arr[i]==minH){
            return i;
        }
    }
}

function getClassName(parent,classname){
	var arr=[];
	var out=parent.getElementsByTagName('*');
	for(var i=0;i<out.length;i++){
		if(out[i].className==classname){
			arr.push(out[i]);
		}
	}
	return arr;
}

function checkscrollside(){
    var oParent=document.getElementById('box');
    var aPin=getClassName(oParent,'out');
    var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);
	//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//注意解决兼容性
    var documentH=document.documentElement.clientHeight;//页面高度
    return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}