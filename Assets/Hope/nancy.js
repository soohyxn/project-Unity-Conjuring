#pragma strict

var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;

var isNancy : boolean;

function Start () {

	isNancy = false;
}

function Update () {

}
function OnGUI() { 
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(0,0,sw/8,sh/6),"찾은 사람: ", labelStyle);
	
	if(!isNancy)
		GUI.Label(Rect(sw/8*2,0,sw/8,sh/6),"낸시", labelStyle);

	if(isNancy)
		GUI.Label(Rect(sw/8*2,0,sw/8,sh/6),"낸시", labelStyle2);
	
}
function NancyHit(){
	isNancy = true;
}
