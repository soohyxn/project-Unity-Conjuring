#pragma strict
var skin : GUISkin;
var message : String = "1971년 ?월?일\n정신을 잃었었다. 그 후로 몇일 째일까. \n분명 길을 잃을 구조가 아닌데 \n같은 곳을 계속 빙빙 도는 느낌이다. ";
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