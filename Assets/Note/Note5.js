#pragma strict
var skin : GUISkin;
var message : String = "안드레아의 방 외 다른 방의 옷장 뒤에 \n숨겨진 공간이 있다는 것을 알아냈다. \n이제 여기가 어딘지도 모르겠다. \n누군가가 내 뒤..";
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