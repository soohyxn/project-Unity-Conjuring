#pragma strict
var skin : GUISkin;
var message : String = "엄마, 옷장이 자꾸 열려서 잠가놨어요.";
private var currentObjectText : String = "";
var labelStyle : GUIStyle;

function OnMouseEnter() {
	currentObjectText = message;
}
function OnMouseExit() {
	currentObjectText = "";
}
function OnGUI() { 
	GUI.skin = skin;
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	
	if(currentObjectText != "")
	{
		GUI.Label(Rect(sw/5,sh/4,sw*1/5,sh*1/4),currentObjectText, labelStyle);
	}
}
function Start () {

}

function Update () {

}