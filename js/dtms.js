var  dtan = document.getElementsByClassName('dtms')[0];
var  dtms = document.getElementById('dtms')
var  gbdt = dtms.getElementsByTagName("span")[0];
dtan.onclick=function  () {
	zz.style.display= "block";
	dtms.style.display="block"
}
gbdt.onclick=function(){
	zz.style.display= "none";
	dtms.style.display="none"
}