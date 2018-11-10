var x = document.getElementById("text").style

function makeitbold (){
	if (x.fontWeight == "bold") {
		x.fontWeight="normal";
	}else{
		x.fontWeight="bold";
	}}
function italic (){
	if (x.fontStyle == "italic") {
		x.fontStyle="normal";
	}else{
		x.fontStyle="italic";
	}}
function underline (){
	if (x.textDecoration == "underline") {
		x.textDecoration="none";
	}else{
		x.textDecoration="underline";
	}}
function changingfont (){
	var font = document.getElementById("changingfont").value;
	document.getElementById("text").style.fontFamily = font;
}
function changingtextsize (){
	var size = document.getElementById("changingtextsize").value;
	document.getElementById("text").style.fontSize = size;
}
function changecolor (){
	var color = document.getElementById("changecolor").value;
	document.getElementById("text").style.color = color;
}
function textdisplay (){
	var textdisplay = document.getElementById("textdisplay").value;
	document.getElementById("text").style.textAlign = textdisplay;
}
