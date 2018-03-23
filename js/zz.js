var zz = document.getElementById('zhezhao');
var dlan = document.getElementsByClassName("dlan")[0];
var dlnr = document.getElementById("dlnr");
var gban = document.getElementsByClassName("gbdl")[0]; 
dlan.onclick=function  () {
	zz.style.display= "block";
	dlnr.style.display="block";
}
gban.onclick=function(){
	zz.style.display="none";
	dlnr.style.display="none"
}


var zcnr=document.getElementById("zcnr");
var zcan=document.getElementsByClassName("zcan")[0];
var gban = document.getElementsByClassName("gbzc")[0];
zcan.onclick=function  () {
	console.log(1)
	zz.style.display= "block";
	zcnr.style.display="block"
}
gban.onclick=function(){
	zz.style.display="none";
	zcnr.style.display="none"
}
