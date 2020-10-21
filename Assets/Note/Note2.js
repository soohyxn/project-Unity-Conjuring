#pragma strict
var skin : GUISkin;
var message : String = "자꾸 누군가가 날 따라온다. \n퇴마하지 못한 그 존재일 수도. \n나를 어딘가로 유도하는 느낌이다. \n함정에 빠진 느낌이 든다.";
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
		GUI.Label(Rect(sw/7,sh/4,sw*1/7,sh*1/4),currentObjectText, labelStyle);
	}
}
function Start () {

}

function Update () {

}