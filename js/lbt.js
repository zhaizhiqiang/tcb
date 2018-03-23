var img = document.getElementsByClassName('lbt')[0];
var num = 0;
var arr = ["images/lb1.png","images/lb2.jpg","images/lb3.jpg"];
var lis = document.getElementById('lbt').getElementsByTagName('li')
var timer;

lis.onmouseover=function(){
	clearInterval(timer)
}
timer= window.setInterval(lbt,1000);
function  lbt() {
	img.src=arr[num];
	for (var i=0; i<3; i++){
		lis[i].style.backgroundColor="#fff"
	}
	lis[num].style.backgroundColor="#000"
	num++;
	if (num==3){
		num=0;
	}
}
function tz(num2){
		clearInterval(timer);
		img.src = arr[num2];
		for (var i=0; i<lis.length; i++){
			lis[i].style.background = "#fff"
		}
		lis[num2].style.background= "#000";
		num = num2+1;
		if(num2==2){
			num=0;
		}
}

function  ks () {
		clearInterval(timer);
		timer =setInterval(lbt,1000)
	}