window.onload=function(){
	var text=" [ar:林俊杰] [ti:我怀念的(Live)] [00:00.52]林俊杰-我怀念的(Live) [00:02.20]词：姚若龙 [00:03.16]曲：李偲菘 [00:30.32]我问为什么 [00:32.85]那女孩传简讯给我 [00:38.60]而你为什么 [00:40.78]不解释低着头沉默 [00:45.35]我该相信你很爱我 [00:49.26]不愿意敷衍我 [00:52.68]还是明白 [00:54.57]你已不想挽回什么 [01:03.56]想问为什么 [01:05.86]我不再是你的快乐 [01:11.04]可是为什么 [01:13.27]却苦笑说我都懂了 [01:17.79]自尊常常将人拖着 [01:21.85]把爱都走曲折 [01:25.36]假装了解是怕 [01:27.85]真相太赤裸裸 [01:31.45]狼狈比失去难受 [01:37.38]我怀念的是无话不说 [01:41.14]我怀念的是一起作梦 [01:44.95]我怀念的是争吵以后 [01:48.24]还是想要爱你的冲动 [01:52.66]我记得那年生日 [01:56.42]也记得那一首歌 [01:59.94]记得那片星空 [02:02.07]最紧的右手 [02:03.85]最暖的胸口 [02:05.98]谁记得 [02:19.89]想问为什么 [02:21.98]我不再是你的快乐 [02:26.90]可是为什么 [02:28.98]却苦笑说我都懂了 [02:33.05]自尊常常将人拖着 [02:36.91]把爱都走曲折 [02:40.16]假装了解是怕 [02:42.54]真相太赤裸裸 [02:45.82]狼狈比失去难受 [02:48.87]我怀念的是无话不说 [02:52.38]我怀念的是一起作梦 [02:55.83]我怀念的是争吵以后 [02:59.00]还是想要爱你的冲动 [03:03.06]我记得那年生日 [03:06.79]也记得那一首歌 [03:09.89]记得那片星空 [03:11.88]最紧的右手 [03:13.56]最暖的胸口 [03:15.18]谁忘了 [03:17.00]我怀念的是无言感动 [03:20.40]我怀念的是绝对炽热 [03:23.80]我怀念的是你很激动 [03:26.95]求我原谅抱得我都痛 [03:31.12]我记得你在背后 [03:34.52]也记得我颤抖着 [03:37.72]记得感觉汹涌 [03:39.60]最美的烟火 [03:41.40]最长的相拥 [03:49.63]谁要走我的心 [03:53.03]谁忘了那就是承诺 [03:56.64]谁自顾自地走 [03:59.99]谁忘了看着我 [04:03.40]谁让爱变沉重 [04:06.80]谁忘了要给你温柔 [04:21.10]我怀念的 [04:23.54]我还有想要爱你的冲动 [04:31.46]我记得那年生日 [04:34.91]也记得那一首歌 [04:37.91]记得那片星空 [04:39.94]最紧的右手 [04:41.57]最暖的胸口 [04:45.02]太爱了 [04:48.02]所以我 [04:51.63]没有哭 [04:55.54]没有说";
	
	var lyric=parseLyric(text);

	appendLyric(lyric);
	//获取页面上的audio标签
	var audio = document.getElementById('audio'),
	    //显示歌词的元素
	    lyricContainer = document.getElementById('lyricContainer');
	//监听ontimeupdate事件
	// audio.ontimeupdate = function(e) {
	//     //遍历所有歌词，看哪句歌词的时间与当然时间吻合
	//     for (var i = 0, l = lyric.length; i < l; i++) {
	//         if (this.currentTime /*当前播放的时间*/ > lyric[i][0]) {
	//             //显示到页面
	//             lyricContainer.textContent = that.lyric[i][1];
	//         };
	//     };
	// };
	function appendLyric(lyric) {
        var that = this,
            lyricContainer = this.lyricContainer,
            fragment = document.createDocumentFragment();
        //clear the lyric container first
        lyricContainer.innerHTML = '';
        lyric.forEach(function(v, i, a) {
            var line = document.createElement('p');
            line.id = 'line-' + i;
            line.textContent = v[1];
            fragment.appendChild(line);
        });
        lyricContainer.appendChild(fragment);
    }

	audio.ontimeupdate = function(e) {
            for (var i = 0, l = lyric.length; i < l; i++) {
                if (this.currentTime >lyric[i][0] - 0.50 /*preload the lyric by 0.50s*/ ) {
                    var line = document.getElementById('line-' + i),
                        prevLine = document.getElementById('line-' + (i > 0 ? i - 1 : i));
                    prevLine.className = '';
                    //randomize the color of the current line of the lyric
                    line.className = 'current-line-' + 1;
                    lyricContainer.style.top = 60 - line.offsetTop + 'px';
                };
            };
        };



	function parseLyric(text) {
	    //将文本分隔成一行一行，存入数组
	    var lines = text.split(' '),
	        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
	        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
	        //保存最终结果的数组
	        result = [];
	    //去掉不含时间的行
	    while (!pattern.test(lines[0])) {
	        lines = lines.slice(1);
	    };
	    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
	    lines[lines.length - 1].length === 0 && lines.pop();
	    lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
	        //提取出时间[xx:xx.xx]
	        var time = v.match(pattern),
	            //提取歌词
	            value = v.replace(pattern, '');
	        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
	        time.forEach(function(v1, i1, a1) {
	            //去掉时间里的中括号得到xx:xx.xx
	            var t = v1.slice(1, -1).split(':');
	            //将结果压入最终数组
	            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
	        });
	    });
	    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
	    result.sort(function(a, b) {
	        return a[0] - b[0];
	    });
	    console.log(result);
	    return result;
	    
	}
}
	// function readFile(filename){
	// 	var fso = new ActiveXObject("Scripting.FileSystemObject");
	// 	var f = fso.OpenTextFile(filename,1);
	// 	var s = "";
	// 	while (!f.AtEndOfStream)
	// 	s += f.ReadLine()+"\n";
	// 	f.Close();
	// 	return s;
	// }


	// function upload(input) {  
 //            //支持chrome IE10  
 //            if (window.FileReader) {  
 //                var file = input.files[0];  
 //                filename = file.name.split(".")[0];  
 //                var reader = new FileReader();  
 //                reader.onload = function() {  
 //                    console.log(this.result);  
 //                }  
 //                reader.readAsText(file);  
 //            }   
 //            //支持IE 7 8 9 10  
 //            else if (typeof window.ActiveXObject != 'undefined'){  
 //                var xmlDoc;   
 //                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");   
 //                xmlDoc.async = false;   
 //                xmlDoc.load(input.value);   
 //                console.log(xmlDoc.xml);   
 //            }   
 //            //支持FF  
 //            else if (document.implementation && document.implementation.createDocument) {   
 //                var xmlDoc;   
 //                xmlDoc = document.implementation.createDocument("", "", null);   
 //                xmlDoc.async = false;   
 //                xmlDoc.load(input.value);   
 //                console.log(xmlDoc.xml);  
 //            } else {   
 //                alert('error');   
 //            }   
 //    }  