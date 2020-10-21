#pragma strict
var skin : GUISkin;
var message : String = "에이프릴, 너가 좋아할 것 같은 오르골이야.\n옷장 뒤에서 찾았어.\n-안드레아-";
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