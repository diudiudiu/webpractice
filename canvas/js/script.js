window.onload=function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	ctx.lineWidth = 7;

	ctx.beginPath(); // 开一条新路
	ctx.moveTo(158, 86);

	var grd=ctx.createLinearGradient(0,0,175,0);
	grd.addColorStop("0","#F25B68");
	grd.addColorStop(1,"#DA628C");

	ctx.strokeStyle = grd;
	ctx.arc(88, 88, 70, 0 ,Math.PI*2);
	ctx.stroke(); // 画圆


	var canvas = document.getElementById("canvas1");
	var ctx1 = canvas.getContext('2d');
	//
	// 中间设置渐变参数的代码一样
	//
	function draw(ctx, x) {
	    ctx.clearRect(0, 0, 300, 300);
	    ctx.lineWidth = 7;
	    ctx.beginPath();
	    ctx.strokeStyle = grd;//'#ff4444';
	    if (x < Math.PI*2) {
	        x += Math.PI/100;
	    } else {
	        x = 0;
	    }
	    ctx.arc(88, 88, 70, 0, x, false); // 画圆
	    ctx.stroke();
	    requestAnimationFrame(function () {
	        draw(ctx, x);
	    });
	}

	requestAnimationFrame(function () {
	    draw(ctx1, 0);
	});

	// var canvas = document.getElementById("canvas2");
	// var ctx2 = canvas.getContext('2d');
	// ctx2.lineWidth = 8;
	// ctx2.lineCap="round";

	// var img;
	// img = new Image();
	// img.src = "images/bg.png";

	// if (img.complete) {
	//    setImageFill();
	// } else {
	//    img.onload = setImageFill;
	// }

	// var newFill = null;
	// function setImageFill() {
	//     newFill = ctx2.createPattern(img, 'no-repeat');
	//     drawNew(ctx2, 0);
	// }

	// function drawNew(ctx, x) {
	//     ctx.clearRect(0, 0, 300, 300);
	//     ctx.beginPath();
	//     ctx.strokeStyle = newFill;
	//     if (x < Math.PI*2) {
	//         x += Math.PI/100;
	//     } else {
	//         x = 0;
	//     }
	//     ctx.arc(50, 50, 46, 0, x, false);
	//     ctx.stroke();
	//     requestAnimationFrame(function () {
	//         drawNew(ctx, x);
	//     });
	// }
}