#pragma strict

var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;

var isCindy : boolean;
function Start () {
	isCindy = false;
}

function Update () {

}
function OnGUI() { 
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	GUI.Label(Rect(0,0,sw/8,sh/6),"찾은 사람: ", labelStyle);
	
	if(!isCindy)
		GUI.Label(Rect(sw/8*3,0,sw/8,sh/6),"신디", labelStyle);
	
	if(isCindy)
		GUI.Label(Rect(sw/8*3,0,sw/8,sh/6),"신디", labelStyle2);
	
}
function CindyHit() {
	isCindy = true;
}