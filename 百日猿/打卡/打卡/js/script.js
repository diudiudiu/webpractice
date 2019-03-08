window.onload = function(){
    /**
     * 进度条
     */

    var percent = document.getElementById('percent');
    var pro = percent.innerHTML.substring(0,percent.innerHTML.length-1);//获取百分比
    var col=document.getElementById("col");
    col.style.width=400*pro/100+"px";
    
    /**
     * 自定义滚动条
     */
    var oBox = document.getElementById("datebox");
    var oCon = document.getElementById("datecontent");
    var oScroll = document.getElementById("scroll");
    var oBar = document.getElementById("bar");
    //bar的高度为，bar高度/scroll的高度 = box的高度/content的高度
    //bar高度 = box的高度*scroll的高度/content的高度
    var width= parseInt(oBox.offsetWidth * oScroll.offsetWidth) / parseInt(oCon.offsetWidth);
    oBar.style.Width = width + "px";
    oBar.onmousedown = function (e) {
        var cX = parseInt(e.clientX);
        var oW = parseInt(this.offsetLeft);
        var spaceX = cX - oW;
        document.onmousemove = function (e) {
            //鼠标移动时，不选中文字
            window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
            // var nowX = e.clientX;
            var nowX = parseInt(e.clientX);
            // var x = nowX - spaceX;
            var x = nowX - spaceX;
            // oBar.style.left = x + "px";
            //比例问题：bar的移动距离/bar的可以移动的距离 = content的移动距离 / content可以移动的距离
            //content的移动距离 = y/bar的可以移动的距离 * content可以移动的距离
            var baWidth = parseInt(oScroll.offsetWidth - oBar.offsetWidth);
 
            x = x<0?x=0:x;
            x = x>baWidth?baWidth:x;
 
            var conWidth = parseInt(oCon.offsetWidth - oBox.offsetWidth);
 
            var conX = x * conWidth / baWidth ;
            oBar.style.left = x + "px";
            oCon.style.marginLeft = -conX + "px";
        }
    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}