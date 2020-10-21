#pragma strict
var skin : GUISkin;
var message : String = "이럴수가. 도망쳐야 한다. \n그 존재는 내가 그의 의도를 따르길 원한다. \n한 번 거부하였더니 이 집 전체가 나를 위협...";
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