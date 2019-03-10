window.onload=function(){

	var stage=document.getElementById("stage");
	var bg=document.getElementById("bg");
	var flipBox=document.getElementById("flipBox");
	var current = 0;
	stage.onclick=function(){
		current = (current-180)%360;
		// flipBox.style.transform="rotateY(-'+current+'deg)";
		flipBox.style.transform = 'rotateY('+current+'deg)';
		if (current==-180) {
			bg.style.opacity = "0.5";
			bg.style.filter = "alpha(opacity=50%)";
		}else{
			bg.style.opacity = "1";
			bg.style.filter = "alpha(opacity=100)";
		}
	}
}