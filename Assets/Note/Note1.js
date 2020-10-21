#pragma strict
var skin : GUISkin;
var message : String = "1971년 2월 10일\n\n드디어 이 집에 들어왔다. \n왜인지 모르겠지만 이 집은 낮에 절대 들어올 수 없다. \n무언가가 막고 있는 모양이다. \n그리고 거실에서 안드레아의 방의 열쇠를 찾았다.";
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