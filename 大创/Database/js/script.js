window.onload=function(){
    var top=document.getElementById('top');
    var tli=top.getElementsByTagName('li');


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
            tli[3].className='action';
        }
    }
    
	
	var data1={
        'data':[
        {'src':'../../images/yundong/yundong(56).jpg'},
        {'src':'../../images/yundong/yundong(57).jpg'},
        {'src':'../../images/yundong/yundong(58).jpg'},
        {'src':'../../images/yundong/yundong(59).jpg'},
        // {'src':'../../images/yundong/yundong(60).jpg'},
        // {'src':'../../images/yundong/yundong(61).jpg'},
        // {'src':'../../images/yundong/yundong(62).jpg'},
        // {'src':'../../images/yundong/yundong(63).jpg'},
        // {'src':'../../images/yundong/yundong(64).jpg'},
        // {'src':'../../images/yundong/yundong(65).jpg'}
        ]
    };
    var data2={
        'data':[
        {'src':'../../images/yundong/yundong(56).jpg'},
        {'src':'../../images/yundong/yundong(57).jpg'},
        {'src':'../../images/yundong/yundong(58).jpg'},
        {'src':'../../images/yundong/yundong(59).jpg'},
        {'src':'../../images/yundong/yundong(60).jpg'},
        {'src':'../../images/yundong/yundong(61).jpg'},
        {'src':'../../images/yundong/yundong(62).jpg'},
        {'src':'../../images/yundong/yundong(63).jpg'},
        {'src':'../../images/yundong/yundong(64).jpg'},
        {'src':'../../images/yundong/yundong(65).jpg'}]
    };
    var data3={
        'data':[
        {'src':'../../images/yundong/yundong(56).jpg'},
        {'src':'../../images/yundong/yundong(57).jpg'},
        {'src':'../../images/yundong/yundong(58).jpg'},
        {'src':'../../images/yundong/yundong(59).jpg'},
        {'src':'../../images/yundong/yundong(60).jpg'},
        {'src':'../../images/yundong/yundong(61).jpg'},
        {'src':'../../images/yundong/yundong(62).jpg'},
        {'src':'../../images/yundong/yundong(63).jpg'},
        {'src':'../../images/yundong/yundong(64).jpg'},
        {'src':'../../images/yundong/yundong(65).jpg'}]
    };
    var more1=document.getElementById('wall1more');
    var more2=document.getElementById('wall2more');
    var more3=document.getElementById('wall3more');
    
    more2.onclick=function(){
        more('wall2',2);
    }
    more3.onclick=function(){
        more('wall3',3);
    }
    for(var i=1;i<=3;i++){
        waterfall('wall'+i,'out',i);
    }
    more1.onclick=function(){
        more('wall1',1);
    }
    function more(wall,num){
            var oParent = document.getElementById(wall);// 父级对象
            // oParent.style.height=(oParent.offsetHeight+50)+'px';
            if(num=='1'){
                for(var i=0;i<data1.data.length;i++){
                    var oPin=document.createElement('div'); //添加 元素节点
                    oPin.className='out';                   //添加 类名 name属性
                    oParent.appendChild(oPin);              //添加 子节点
                    var oBox=document.createElement('div');
                    oBox.className='border';
                    oPin.appendChild(oBox);
                    var oImg=document.createElement('img');
                    oImg.src='./images/'+data1.data[i].src;
                    oBox.appendChild(oImg);
                }
            }else if(num=='2'){
                for(var i=0;i<data2.data.length;i++){
                    var oPin=document.createElement('div'); //添加 元素节点
                    oPin.className='out';                   //添加 类名 name属性
                    oParent.appendChild(oPin);              //添加 子节点
                    var oBox=document.createElement('div');
                    oBox.className='border';
                    oPin.appendChild(oBox);
                    var oImg=document.createElement('img');
                    oImg.src='./images/'+data2.data[i].src;
                    oBox.appendChild(oImg);
                }
            }else if(num=='3'){
                for(var i=0;i<data3.data.length;i++){
                    var oPin=document.createElement('div'); //添加 元素节点
                    oPin.className='out';                   //添加 类名 name属性
                    oParent.appendChild(oPin);              //添加 子节点
                    var oBox=document.createElement('div');
                    oBox.className='border';
                    oPin.appendChild(oBox);
                    var oImg=document.createElement('img');
                    oImg.src='./images/'+data3.data[i].src;
                    oBox.appendChild(oImg);
                }
            }
            waterfall(wall,'out');
    };
    
}
function waterfall(parent,classname){
    var wall=document.getElementById(parent);
    var out=getClassName(wall,classname);
    var arr1=[];
    var column=Math.floor(wall.offsetWidth/out[0].offsetWidth);
    for(var i=0;i<out.length;i++){
        var temp=out[i].offsetHeight;
        if(i<column){
            arr1[i]=temp;
        }else{
            var minH=Math.min.apply(null,arr1);
            var index=getminHIndex(arr1,minH);
            out[i].style.position='absolute';//设置绝对位移
            out[i].style.top=minH+'px';
            out[i].style.left=out[index].offsetLeft+'px';
            arr1[index]+=out[i].offsetHeight;
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
